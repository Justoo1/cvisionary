import React from "react";
import { Badge } from "@/components/ui/badge";
import ResumeSection from "./ResumeSection";
import { BorderStyles } from "@/components/shared/BorderStyleButton";
import { ResumeSectionProps } from "@/types";

const SkillsSection = ({ resumeData }: ResumeSectionProps) => {
  const { skills, colorHex, borderStyle } = resumeData;
  if (!skills?.length) return null;

  return (
    <ResumeSection title="Skills" colorHex={colorHex}>
      <div className="flex break-inside-avoid flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            className="rounded-md bg-black text-white hover:bg-black"
            style={{
              backgroundColor: colorHex,
              borderRadius:
                borderStyle === BorderStyles.SQUARE
                  ? "0"
                  : borderStyle === BorderStyles.CIRCLE
                    ? "9999px"
                    : "8px",
            }}
          >
            {skill}
          </Badge>
        ))}
      </div>
    </ResumeSection>
  );
};

export default SkillsSection;
