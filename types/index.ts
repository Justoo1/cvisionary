import { ResumeValues } from "@/lib/validation";
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
