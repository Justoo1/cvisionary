import {
  GenerateWorkExperienceInput,
  generateWorkExperienceSchema,
  WorkExperience,
} from "@/lib/validation";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { WandSparklesIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import generateWorkExperience from "@/lib/actions/workexperience.action";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogDescription,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import LoadingButton from "./LoadingButton";

interface GenerateWorkExperienceButtonProps {
  onWorkExperienceGenerated: (workExperienc: WorkExperience) => void;
}

const GenerateWorkExperienceButton = ({
  onWorkExperienceGenerated,
}: GenerateWorkExperienceButtonProps) => {
  const [showInputDialog, setShowInputDialog] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        type="button"
        // TODO: BLock for non-premium users
        onClick={() => setShowInputDialog(true)}
      >
        <WandSparklesIcon className="size-4" />
        Smart fill (AI)
      </Button>
      <InputDialog
        open={showInputDialog}
        onOpenChange={setShowInputDialog}
        onWorkExperienceGenerated={(workExperience) => {
          onWorkExperienceGenerated(workExperience);
          setShowInputDialog(false);
        }}
      />
    </>
  );
};

interface InputDialogPorps {
  onWorkExperienceGenerated: (workExperienc: WorkExperience) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const InputDialog = ({
  open,
  onOpenChange,
  onWorkExperienceGenerated,
}: InputDialogPorps) => {
  const { toast } = useToast();

  const form = useForm<GenerateWorkExperienceInput>({
    resolver: zodResolver(generateWorkExperienceSchema),
    defaultValues: {
      description: "",
    },
  });

  const onSubmit = async (input: GenerateWorkExperienceInput) => {
    try {
      const response = await generateWorkExperience(input);
      onWorkExperienceGenerated(response);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        description: "Failed to generate work experience.",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Generate work experience</DialogTitle>
          <DialogDescription>
            Describe this work experience and the AI will generate an optimized
            entry for you.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder={`E.g. "from nov 2019 to dec 2020 I worked at google as software engineer, tasks were: ...`}
                      autoFocus
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <LoadingButton type="submit" loading={form.formState.isSubmitting}>
              Generate
            </LoadingButton>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default GenerateWorkExperienceButton;
