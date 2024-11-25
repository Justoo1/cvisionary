import { ResumeValues } from "@/lib/validation";
import ResumePreview from "./ResumePreview";
import ColorPicker from "./ColorPicker";
import BorderStyleButton from "./BorderStyleButton";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { Button } from "../ui/button";
import { Printer } from "lucide-react";
import { useReactToPrint } from "react-to-print";

interface ReumePreviewSectionProps {
  resumeData: ResumeValues;
  setResumeData: (data: ResumeValues) => void;
  className?: string;
}

const ReumePreviewSection = ({
  resumeData,
  setResumeData,
  className,
}: ReumePreviewSectionProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const reactToPrintFn = useReactToPrint({
    contentRef: contentRef,
    documentTitle: resumeData.title || "Resume",
  });
  return (
    <div
      className={cn("group relative hidden w-full md:flex md:w-1/2", className)}
    >
      <div className="absolute left-1 top-1 flex flex-none flex-col gap-3 opacity-50 transition-opacity group-hover:opacity-100 lg:left-3 lg:top-3 2xl:opacity-100">
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
        />
      </div>
    </div>
  );
};

export default ReumePreviewSection;
