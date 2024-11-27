import React from "react";
import { cn } from "@/lib/utils";

interface ResumeSectionProps {
  title: string;
  colorHex: string | undefined;
  children: React.ReactNode;
  className?: string;
}

const ResumeSection: React.FC<ResumeSectionProps> = ({
  title,
  colorHex,
  children,
  className,
}) => {
  return (
    <div className={cn("break-inside-avoid space-y-3", className)}>
      <hr className="border-2" style={{ borderColor: colorHex }} />
      <p className="text-lg font-semibold" style={{ color: colorHex }}>
        {title}
      </p>
      {children}
    </div>
  );
};

export default ResumeSection;
