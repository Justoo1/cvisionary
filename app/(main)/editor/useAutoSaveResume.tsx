import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import useDebounce from "@/hooks/useDebounce";
import saveResume from "@/lib/actions/actions";
import { formUrlQuery } from "@/lib/urls";
import { fileReplacer } from "@/lib/utils";
import { ResumeValues } from "@/lib/validation";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useAutoSaveResume = (resumeData: ResumeValues) => {
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const router = useRouter();

  const debouncedResumeData = useDebounce(resumeData, 1500);

  const [resumeId, setResumeId] = useState(resumeData.id);
  const [lastSavedData, setLastSavedData] = useState(
    structuredClone(resumeData),
  );

  const [isSaving, setIsSaving] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
  }, [debouncedResumeData]);

  useEffect(() => {
    const save = async () => {
      try {
        setIsSaving(true);
        setIsError(false);

        const newData = structuredClone(debouncedResumeData);

        const updatedResume = await saveResume({
          ...newData,
          ...(JSON.stringify(lastSavedData.photo, fileReplacer) ===
            JSON.stringify(newData.photo, fileReplacer) && {
            photo: undefined,
          }), // this help to avoid sending the same photo to the server
          id: resumeId,
        });

        setResumeId(updatedResume.id); // this help so that we don't create a new records if we are editing an existing resume
        setLastSavedData(newData);

        // add the current resume id to the url
        if (searchParams.get("id") !== updatedResume.id) {
          const newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: "resumeId",
            value: updatedResume.id,
          });
          router.replace(newUrl);
        }
      } catch (error) {
        setIsError(true);
        console.error(error);
        const { dismiss } = toast({
          variant: "destructive",
          description: (
            <div className="space-y-3">
              <p>Could not save changes.</p>
              <Button
                onClick={() => {
                  dismiss();
                  save();
                }}
                variant="secondary"
              >
                Retry
              </Button>
            </div>
          ),
        });
      } finally {
        setIsSaving(false);
      }
    };
    const hasUnsavedChanges =
      JSON.stringify(lastSavedData, fileReplacer) !==
      JSON.stringify(debouncedResumeData, fileReplacer);
    if (hasUnsavedChanges && debouncedResumeData && !isSaving && !isError) {
      save();
    }
  }, [
    debouncedResumeData,
    isSaving,
    lastSavedData,
    resumeId,
    router,
    isError,
    searchParams,
    toast,
  ]);

  return {
    isSaving,
    hasUnsavedChanges:
      JSON.stringify(resumeData) !== JSON.stringify(lastSavedData),
  };
};

export default useAutoSaveResume;
