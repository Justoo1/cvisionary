"use server";

import { del } from "@vercel/blob";
import prisma from "../prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

const deleteResume = async (resumeId: string) => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not authenticated!");
  }

  const resume = await prisma.resume.findUnique({
    where: {
      id: resumeId,
      userId,
    },
  });

  if (!resume) {
    throw new Error("Resume not found.");
  }

  if (resume.photoUrl) {
    await del(resume.photoUrl);
  }

  await prisma.resume.delete({
    where: { id: resumeId },
  });

  revalidatePath("/resumes");
};

export default deleteResume;
