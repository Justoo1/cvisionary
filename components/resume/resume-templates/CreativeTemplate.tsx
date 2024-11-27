import React from "react";
import { ResumeTemplateProps } from "../ResumeTemplate";
import PersonalInfoHeader from "../PersonalInfoHeader";
import SkillsSection from "../SkillsSection";
import EducationSection from "../EducationSection";
import SummarySection from "../SummarySection";
import WorkExperienceSection from "../WorkExperienceSection";

const CreativeTemplate: React.FC<ResumeTemplateProps> = ({ resumeData }) => {
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-5 space-y-6 bg-gray-100 p-6">
        <PersonalInfoHeader
          resumeData={resumeData}
          className="flex-col gap-2"
          templateName="creative"
        />
        <SkillsSection resumeData={resumeData} />
        <EducationSection resumeData={resumeData} />
      </div>
      <div className="col-span-7 space-y-6 p-6">
        <SummarySection resumeData={resumeData} />
        <WorkExperienceSection resumeData={resumeData} />
      </div>
    </div>
  );
};

export default CreativeTemplate;
