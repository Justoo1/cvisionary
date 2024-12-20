import { ResumeValues } from "@/lib/validation";
import { Prisma } from "@prisma/client";
import { ComponentType } from "react";

export type EditorFormProps = {
  resumeData: ResumeValues;
  setResumeData: (data: ResumeValues) => void;
};

export type StepsProp = {
  title: string;
  component: ComponentType<EditorFormProps>;
  key: string;
};

export const resumeDataInclude = {
  workExperiences: true,
  educations: true,
} satisfies Prisma.ResumeInclude;

export type ResumeServerData = Prisma.ResumeGetPayload<{
  include: typeof resumeDataInclude;
}>;

export type TemplateProps = {
  id: string;
  name: string;
  component: ComponentType;
};

export type TemplatesByCountry = {
  [key: string]: TemplateProps[];
};

export type Country = {
  id: string;
  name: string;
};

export interface ResumeSectionProps {
  resumeData: ResumeValues;
  className?: string;
  templateName?: string;
}

export const TEMPLATENAMES = {
  MODERN: "modern",
  MINIMALIST: "minimalist",
  CREATIVE: "creative",
  BASIC: "basic",
  CANADA: "canada",
  GHANA: "ghana",
  US: "us",
  UK: "uk",
  AUSTRALIA: "australia",
  GERMANY: "germany",
};
