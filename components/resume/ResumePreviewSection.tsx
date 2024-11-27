import React from "react";
import { ResumeValues } from "@/lib/validation";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Printer } from "lucide-react";
import { useReactToPrint } from "react-to-print";
import ResumePreview from "./ResumePreview";
import ColorPicker from "../shared/ColorPicker";
import BorderStyleButton from "../shared/BorderStyleButton";

interface ResumePreviewSectionProps {
  resumeData: ResumeValues;
  setResumeData: (data: ResumeValues) => void;
  className?: string;
  templateName?: string;
  modernTemplateSidebarPosition?: "left" | "right";
  contentRef: React.RefObject<HTMLDivElement>;
  hideButtons?: boolean;
}

const ResumePreviewSection: React.FC<ResumePreviewSectionProps> = ({
  resumeData,
  setResumeData,
  className,
  templateName = "basic",
  modernTemplateSidebarPosition = "left",
  contentRef,
  hideButtons,
}) => {
  // if(contentRef)
  // const contentRef = useRef<HTMLDivElement>(null);

  const reactToPrintFn = useReactToPrint({
    contentRef,
    documentTitle: resumeData.title || "Resume",
  });

  return (
    <div
      className={cn("group relative hidden w-full md:flex md:w-1/2", className)}
    >
      <div
        className={cn(
          "absolute left-1 top-1 flex flex-none flex-col gap-3 opacity-50 transition-opacity group-hover:opacity-100 lg:left-3 lg:top-3 2xl:opacity-100",
          hideButtons && "hidden",
        )}
      >
        <ColorPicker
          color={resumeData.colorHex}
          onChange={(color) => {
            setResumeData({ ...resumeData, colorHex: color.hex });
          }}
        />
        <BorderStyleButton
          borderStyle={resumeData.borderStyle}
          onChange={(borderStyle) =>
            setResumeData({ ...resumeData, borderStyle })
          }
        />
        <Button variant="outline" size="icon" onClick={() => reactToPrintFn()}>
          <Printer className="size-5" />
        </Button>
      </div>
      <div className="flex w-full justify-center overflow-y-auto bg-secondary p-3">
        <ResumePreview
          className="max-w-2xl shadow-md"
          resumeData={resumeData}
          contentRef={contentRef}
          templateName={templateName}
          modernTemplateSidebarPosition={modernTemplateSidebarPosition}
        />
      </div>
    </div>
  );
};

export default ResumePreviewSection;
