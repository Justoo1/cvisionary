import React from "react";
import { ResumeTemplateProps } from "../ResumeTemplate";
import PersonalInfoHeader from "../PersonalInfoHeader";
import SummarySection from "../SummarySection";
import WorkExperienceSection from "../WorkExperienceSection";
import EducationSection from "../EducationSection";
import SkillsSection from "../SkillsSection";

const BasicTemplate: React.FC<ResumeTemplateProps> = ({
  resumeData,
  contentRef,
}) => {
  return (
    <div className="space-y-6 p-6" ref={contentRef} id="resumePreviewContent">
      <PersonalInfoHeader resumeData={resumeData} />
      <SummarySection resumeData={resumeData} />
      <WorkExperienceSection resumeData={resumeData} />
      <EducationSection resumeData={resumeData} />
      <SkillsSection resumeData={resumeData} />
    </div>
  );
};

export default BasicTemplate;
