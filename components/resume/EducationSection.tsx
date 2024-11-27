import React from "react";
import { formatDate } from "date-fns";
import ResumeSection from "./ResumeSection";
import { ResumeSectionProps } from "@/types";

const EducationSection = ({ resumeData }: ResumeSectionProps) => {
  const { educations, colorHex } = resumeData;
  const educationsNotEmpty = educations?.filter(
    (edu) => edu && Object.values(edu).filter(Boolean).length > 0,
  );

  if (!educationsNotEmpty?.length) return null;

  return (
    <ResumeSection title="Education" colorHex={colorHex}>
      {educationsNotEmpty.map((edu, index) => (
        <div key={index} className="break-inside-avoid space-y-1">
          <div
            className="flex items-center justify-between text-sm font-semibold"
            style={{ color: colorHex }}
          >
            <span>{edu?.degree}</span>
            {edu?.startDate && (
              <span>
                {formatDate(new Date(edu.startDate), "MM/yyyy")} -{" "}
                {edu.endDate
                  ? formatDate(new Date(edu.endDate), "MM/yyyy")
                  : "Ongoing"}
              </span>
            )}
          </div>
          <p className="text-xs font-semibold">{edu?.school}</p>
        </div>
      ))}
    </ResumeSection>
  );
};

export default EducationSection;
