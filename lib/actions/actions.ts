"use server";

import { auth } from "@clerk/nextjs/server";
import { resumeSchema, ResumeValues } from "../validation";
import { del, put } from "@vercel/blob";
import prisma from "../prisma";
import path from "path";

const saveResume = async (values: ResumeValues) => {
  const { id } = values;

  console.log("recieved values", values);

  const { photo, workExperiences, educations, ...resumeValues } =
    resumeSchema.parse(values);

  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not authenticated!");
  }

  // TODO: Check resume count for non-premium users

  const existingResume = id
    ? await prisma.resume.findUnique({ where: { id, userId } })
    : null;

  if (id && !existingResume) {
    throw new Error("Resume not found");
  }

  let newPhotoUrl: string | undefined | null = undefined;

  if (photo instanceof File) {
    if (existingResume?.photoUrl) {
      await del(existingResume.photoUrl);
    }

    const blob = await put(`resume_photos/${path.extname(photo.name)}`, photo, {
      access: "public",
    });

    newPhotoUrl = blob.url;
  } else if (photo === null) {
    if (existingResume?.photoUrl) {
      await del(existingResume.photoUrl);
    }
    newPhotoUrl = null;
  }

  if (id) {
    return prisma.resume.update({
      where: { id },
      data: {
        ...resumeValues,
        photoUrl: newPhotoUrl,
        workExperiences: {
          deleteMany: {},
          create: workExperiences?.map((exp) => ({
            ...exp,
            startDate: exp?.startDate ? new Date(exp.startDate) : null,
            endDate: exp?.endDate ? new Date(exp.endDate) : null,
          })),
        },
        educations: {
          deleteMany: {},
          create: educations?.map((edu) => ({
            ...edu,
            startDate: edu?.startDate ? new Date(edu.startDate) : null,
            endDate: edu?.endDate ? new Date(edu.endDate) : null,
          })),
        },
        updatedAt: new Date(),
      },
    });
  } else {
    return prisma.resume.create({
      data: {
        ...resumeValues,
        userId,
        photoUrl: newPhotoUrl,
        workExperiences: {
          create: workExperiences?.map((exp) => ({
            ...exp,
            startDate: exp?.startDate ? new Date(exp.startDate) : null,
            endDate: exp?.endDate ? new Date(exp.endDate) : null,
          })),
        },
        educations: {
          create: educations?.map((edu) => ({
            ...edu,
            startDate: edu?.startDate ? new Date(edu.startDate) : null,
            endDate: edu?.endDate ? new Date(edu.endDate) : null,
          })),
        },
      },
    });
  }
};

export default saveResume;