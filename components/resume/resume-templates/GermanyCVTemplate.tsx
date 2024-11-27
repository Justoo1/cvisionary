import React from "react";
import { ResumeTemplateProps } from "../ResumeTemplate";
import PersonalInfoHeader from "@/components/resume/PersonalInfoHeader";
import SummarySection from "@/components/resume/SummarySection";
import WorkExperienceSection from "@/components/resume/WorkExperienceSection";
import EducationSection from "@/components/resume/EducationSection";
import SkillsSection from "@/components/resume/SkillsSection";

const GermanyCVTemplate: React.FC<ResumeTemplateProps> = ({ resumeData }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-1 space-y-6">
        <PersonalInfoHeader resumeData={resumeData} />
        <SkillsSection resumeData={resumeData} />
      </div>
      <div className="col-span-2 space-y-6">
        <SummarySection resumeData={resumeData} />
        <WorkExperienceSection resumeData={resumeData} />
        <EducationSection resumeData={resumeData} />
      </div>
    </div>
  );
};

export default GermanyCVTemplate;
