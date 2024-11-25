"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { cn, mapToResumeValues, steps } from "@/lib/utils";
import { formUrlQuery } from "@/lib/urls";
import BreadCrumbs from "./BreadCrumbs";
import Footer from "./Footer";
import { getDefaultResumeValues, ResumeValues } from "@/lib/validation";
import { useState } from "react";
import ReumePreviewSection from "./ReumePreviewSection";
import useAutoSaveResume from "@/app/(main)/editor/useAutoSaveResume";
import useUnloadWarning from "@/hooks/useUnloadWarning";
import { ResumeServerData } from "@/types";

interface ResumeEditorProps {
  resumeToEdit: ResumeServerData | null;
}

const ResumeEditor = ({ resumeToEdit }: ResumeEditorProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [resumeData, setResumeData] = useState<ResumeValues>(
    resumeToEdit ? mapToResumeValues(resumeToEdit) : getDefaultResumeValues(),
  );

  const [showSmResumePreview, setShowSmResumePreview] = useState(false);

  const { isSaving, hasUnsavedChanges } = useAutoSaveResume(resumeData);
  console.log({ isSaving, hasUnsavedChanges });

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

  const FormComponent = steps.find(
    (step) => step.key === currentStep,
  )?.component;

  return (
    <div className="flex grow flex-col">
      <header className="space-y-1.5 border-b px-3 py-5 text-center">
        <h1 className="text-2xl font-bold">Design your resume</h1>
        <p className="text-sm text-muted-foreground">
          Follow the steps below to create your resume. Your progress will be
          saved automatically.
        </p>
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
          <ReumePreviewSection
            resumeData={resumeData}
            setResumeData={setResumeData}
            className={cn(showSmResumePreview && "flex")}
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
