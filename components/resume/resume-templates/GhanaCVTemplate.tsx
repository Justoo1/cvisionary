import React from "react";
import { ResumeTemplateProps } from "../ResumeTemplate";
import PersonalInfoHeader from "@/components/resume/PersonalInfoHeader";
import SummarySection from "@/components/resume/SummarySection";
import WorkExperienceSection from "@/components/resume/WorkExperienceSection";
import EducationSection from "@/components/resume/EducationSection";
import SkillsSection from "@/components/resume/SkillsSection";

const GhanaCVTemplate: React.FC<ResumeTemplateProps> = ({ resumeData }) => {
  return (
    <div className="space-y-6">
      <PersonalInfoHeader resumeData={resumeData} />
      <SummarySection resumeData={resumeData} />
      <EducationSection resumeData={resumeData} />
      <WorkExperienceSection resumeData={resumeData} />
      <SkillsSection resumeData={resumeData} />
    </div>
  );
};

export default GhanaCVTemplate;