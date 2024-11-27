import React from "react";
import ResumeSection from "./ResumeSection";
import { ResumeSectionProps } from "@/types";

const SummarySection = ({ resumeData }: ResumeSectionProps) => {
  const { summary, colorHex } = resumeData;
  if (!summary) return null;

  return (
    <ResumeSection title="Professional Summary" colorHex={colorHex}>
      <div className="whitespace-pre-line text-sm">{summary}</div>
    </ResumeSection>
  );
};

export default SummarySection;
