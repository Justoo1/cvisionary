import React from "react";
import { ResumeTemplateProps } from "../ResumeTemplate";
import PersonalInfoHeader from "../PersonalInfoHeader";
import SkillsSection from "../SkillsSection";
import SummarySection from "../SummarySection";
import WorkExperienceSection from "../WorkExperienceSection";
import EducationSection from "../EducationSection";

interface ModernTemplateProps extends ResumeTemplateProps {
  sidebarPosition?: "left" | "right";
}

const ModernTemplate: React.FC<ModernTemplateProps> = ({
  resumeData,
  sidebarPosition = "left",
}) => {
  const sidebarContent = (
    <div className="w-1/3 space-y-6">
      <PersonalInfoHeader resumeData={resumeData} />
      <SkillsSection resumeData={resumeData} />
    </div>
  );

  const mainContent = (
    <div className="w-2/3 space-y-6">
      <SummarySection resumeData={resumeData} />
      <WorkExperienceSection resumeData={resumeData} />
      <EducationSection resumeData={resumeData} />
    </div>
  );

  return (
    <div className="flex gap-6">
      {sidebarPosition === "left" ? (
        <>
          {sidebarContent}
          {mainContent}
        </>
      ) : (
        <>
          {mainContent}
          {sidebarContent}
        </>
      )}
    </div>
  );
};

export default ModernTemplate;
