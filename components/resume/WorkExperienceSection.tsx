import React from "react";
import { formatDate } from "date-fns";
import ResumeSection from "./ResumeSection";
import { ResumeSectionProps } from "@/types";

const WorkExperienceSection = ({ resumeData }: ResumeSectionProps) => {
  const { workExperiences, colorHex } = resumeData;
  const workExperiencesNotEmpty = workExperiences?.filter(
    (exp) => exp && Object.values(exp).filter(Boolean).length > 0,
  );

  if (!workExperiencesNotEmpty?.length) return null;

  return (
    <ResumeSection title="Work Experience" colorHex={colorHex}>
      {workExperiencesNotEmpty.map((exp, index) => (
        <div key={index} className="break-inside-avoid space-y-1">
          <div
            className="flex items-center justify-between text-sm font-semibold"
            style={{ color: colorHex }}
          >
            <span>{exp?.position}</span>
            {exp?.startDate && (
              <span>
                {formatDate(new Date(exp.startDate), "MM/yyyy")} -{" "}
                {exp.endDate
                  ? formatDate(new Date(exp.endDate), "MM/yyyy")
                  : "Present"}
              </span>
            )}
          </div>
          <p className="text-xs font-semibold">{exp?.company}</p>
          <div className="whitespace-pre-line text-xs">{exp?.description}</div>
        </div>
      ))}
    </ResumeSection>
  );
};

export default WorkExperienceSection;
