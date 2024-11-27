"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { cn, mapToResumeValues, steps } from "@/lib/utils";
import { formUrlQuery } from "@/lib/urls";
import BreadCrumbs from "./BreadCrumbs";
import Footer from "./Footer";
import { getDefaultResumeValues, ResumeValues } from "@/lib/validation";
import { useRef, useState } from "react";
import useAutoSaveResume from "@/app/(main)/editor/useAutoSaveResume";
import useUnloadWarning from "@/hooks/useUnloadWarning";
import { ResumeServerData } from "@/types";
import ResumePreviewSection from "../resume/ResumePreviewSection";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ResumeEditorProps {
  resumeToEdit: ResumeServerData | null;
}

const ResumeEditor = ({ resumeToEdit }: ResumeEditorProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const contentRef = useRef<HTMLDivElement>(null);

  const [resumeData, setResumeData] = useState<ResumeValues>(
    resumeToEdit ? mapToResumeValues(resumeToEdit) : getDefaultResumeValues(),
  );

  const [showSmResumePreview, setShowSmResumePreview] = useState(false);

  const { isSaving, hasUnsavedChanges } = useAutoSaveResume(resumeData);
  const [selectedTemplate, setSelectedTemplate] = useState(
    resumeToEdit?.template,
  );

  useUnloadWarning(hasUnsavedChanges);

  const currentStep = searchParams.get("step") || steps[0].key;
  const setStep = (key: string) => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "step",
      value: key,
    });
    router.push(newUrl);
    // window.history.pushState(null, "", newUrl);
  };

  console.log("selectedTemplate", selectedTemplate);

  const FormComponent = steps.find(
    (step) => step.key === currentStep,
  )?.component;

  const handleValueChange = (value: string) => {
    setSelectedTemplate(value);
    setResumeData({ ...resumeData, template: value });
  };

  // const ResumePreviewComponent = () => {
  //   if (templateName && country) {
  //     const TemplateCompent = templates[country]?.find(
  //       (template) => template.name === templateName,
  //     )?.component;
  //     if (!TemplateCompent) {
  //       return <div>Template not found</div>;
  //     }
  //     return (
  //       <TemplateViewSection>
  //         <TemplateCompent />
  //       </TemplateViewSection>
  //     );
  //   }
  //   return (
  //     <ReumePreviewSection
  //       resumeData={resumeData}
  //       setResumeData={setResumeData}
  //       className={cn(showSmResumePreview && "flex")}
  //     />
  //   );
  // };

  return (
    <div className="flex grow flex-col">
      <header className="flex-center flex flex-col justify-center space-y-1.5 border-b px-3 py-5 text-center">
        <div className="flex-col:flex-row flex items-center justify-between text-center">
          <h1 className="text-2xl font-bold">Design your resume</h1>
          <p className="text-sm text-muted-foreground">
            Follow the steps below to create your resume. Your progress will be
            saved automatically.
          </p>
          <Select
            onValueChange={handleValueChange}
            defaultValue={resumeToEdit?.template}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Template" />
            </SelectTrigger>
            <SelectContent title="Select Template">
              <SelectItem value="basic">Default</SelectItem>
              <SelectItem value="modern">Modern</SelectItem>
              <SelectItem value="creative">Creative</SelectItem>
              <SelectItem value="minimalist">Minimalist</SelectItem>
              <SelectItem value="ghana">Ghana</SelectItem>
              <SelectItem value="canada">Canada</SelectItem>
              <SelectItem value="us">United State</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="germany">Germany</SelectItem>
              <SelectItem value="australia">Australia</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>
      <main className="relative grow">
        <div className="absolute bottom-0 top-0 flex w-full">
          <div
            className={cn(
              "w-full space-y-6 overflow-y-auto p-3 md:block md:w-1/2",
              showSmResumePreview && "hidden",
            )}
          >
            <BreadCrumbs currentStep={currentStep} setCurrentStep={setStep} />
            {FormComponent && (
              <FormComponent
                resumeData={resumeData}
                setResumeData={setResumeData}
              />
            )}
          </div>
          <div className="grow md:border-r" />
          {/* <ResumePreview resumeData={resumeData} /> */}
          <ResumePreviewSection
            resumeData={resumeData}
            setResumeData={setResumeData}
            templateName={selectedTemplate}
            contentRef={contentRef}
          />
        </div>
      </main>
      <Footer
        currentStep={currentStep}
        setCurrentStep={setStep}
        showSmResumePreview={showSmResumePreview}
        setShowSmResumePreview={setShowSmResumePreview}
        isSaving={isSaving}
      />
    </div>
  );
};

export default ResumeEditor;
