import React, { useRef } from "react";
import useDimensions from "@/hooks/useDimensions";
import { cn } from "@/lib/utils";
import { ResumeValues } from "@/lib/validation";
import BasicTemplate from "./resume-templates/BasicTemplate";
import ModernTemplate from "./resume-templates/ModernTemplate";
import MinimalistTemplate from "./resume-templates/MinimalistTemplate";
import CreativeTemplate from "./resume-templates/CreativeTemplate";
import GhanaCVTemplate from "./resume-templates/GhanaCVTemplate";
import CanadaCVTemplate from "./resume-templates/CanadaCVTemplate";
import USCVTemplate from "./resume-templates/USCVTemplate";
import GermanyCVTemplate from "./resume-templates/GermanyCVTemplate";
import UKCVTemplate from "./resume-templates/UKCVTemplate";
import AustraliaCVTemplate from "./resume-templates/AustraliaCVTemplate";

interface ResumePreviewProps {
  resumeData: ResumeValues;
  contentRef?: React.Ref<HTMLDivElement>;
  className?: string;
  templateName?: string;
  modernTemplateSidebarPosition?: "left" | "right";
}

const ResumePreview: React.FC<ResumePreviewProps> = ({
  resumeData,
  className,
  contentRef,
  templateName = "basic",
  modernTemplateSidebarPosition = "left",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width } = useDimensions(containerRef);

  const renderTemplate = () => {
    switch (templateName) {
      case "modern":
        return (
          <ModernTemplate
            resumeData={resumeData}
            contentRef={contentRef}
            sidebarPosition={modernTemplateSidebarPosition}
          />
        );
      case "minimalist":
        return (
          <MinimalistTemplate resumeData={resumeData} contentRef={contentRef} />
        );
      case "creative":
        return (
          <CreativeTemplate resumeData={resumeData} contentRef={contentRef} />
        );
      case "ghana":
        return (
          <GhanaCVTemplate resumeData={resumeData} contentRef={contentRef} />
        );
      case "canada":
        return (
          <CanadaCVTemplate resumeData={resumeData} contentRef={contentRef} />
        );
      case "us":
        return <USCVTemplate resumeData={resumeData} contentRef={contentRef} />;
      case "germany":
        return (
          <GermanyCVTemplate resumeData={resumeData} contentRef={contentRef} />
        );
      case "uk":
        return <UKCVTemplate resumeData={resumeData} contentRef={contentRef} />;
      case "australia":
        return (
          <AustraliaCVTemplate
            resumeData={resumeData}
            contentRef={contentRef}
          />
        );
      case "basic":
      default:
        return (
          <BasicTemplate resumeData={resumeData} contentRef={contentRef} />
        );
    }
  };

  return (
    <div
      className={cn(
        "aspect-[210/297] h-fit w-full bg-white text-black",
        className,
      )}
      ref={containerRef}
    >
      <div
        className={cn("space-y-6 p-6", !width && "invisible")}
        style={{ zoom: (1 / 794) * (width || 0) }}
        ref={contentRef}
        id="resumePreviewContent"
      >
        {renderTemplate()}
      </div>
    </div>
  );
};

export default ResumePreview;
