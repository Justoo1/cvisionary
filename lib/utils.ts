import EducationForm from "@/components/shared/EducationForm";
import GeneralInfoForm from "@/components/shared/GeneralInfoForm";
import PersonalInfoForm from "@/components/shared/PersonalInfoForm";
import SkillsForm from "@/components/shared/SkillsForm";
import SummaryForm from "@/components/shared/SummaryForm";
import WorkExperienceForm from "@/components/shared/WorkExperienceForm";
import { StepsProp } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const steps: StepsProp[] = [
  {
    title: "General info",
    component: GeneralInfoForm,
    key: "general-info",
  },
  {
    title: "Personal info",
    component: PersonalInfoForm,
    key: "personal-info",
  },
  {
    title: "Work experience",
    component: WorkExperienceForm,
    key: "work-experience",
  },
  {
    title: "Education",
    component: EducationForm,
    key: "edcuation",
  },
  {
    title: "Skills",
    component: SkillsForm,
    key: "skills",
  },
  {
    title: "Summary",
    component: SummaryForm,
    key: "summary",
  },
];
