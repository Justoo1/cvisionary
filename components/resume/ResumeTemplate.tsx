import React from 'react';
import { ResumeValues } from "@/lib/validation";

export interface ResumeTemplateProps {
  resumeData: ResumeValues;
  contentRef?: React.Ref<HTMLDivElement>;
}

export interface ResumeTemplate {
  name: string;
  component: React.FC<ResumeTemplateProps>;
}

const ResumeTemplate: React.FC<ResumeTemplateProps> = ({ resumeData, contentRef }) => {
  return (
    <div
      className="space-y-6 p-6"
      ref={contentRef}
      id="resumePreviewContent"
    >
      {/* Template content goes here */}
    </div>
  );
};

export default ResumeTemplate;

