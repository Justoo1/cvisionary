import { ResumeValues } from "@/lib/validation";
import { Prisma } from "@prisma/client";
import React from "react";

export type EditorFormProps = {
  resumeData: ResumeValues;
  setResumeData: (data: ResumeValues) => void;
};

export type StepsProp = {
  title: string;
  component: React.ComponentType<EditorFormProps>;
  key: string;
};

export const resumeDataInclude = {
  workExperiences: true,
  educations: true,
} satisfies Prisma.ResumeInclude;

export type ResumeServerData = Prisma.ResumeGetPayload<{
  include: typeof resumeDataInclude;
}>;
