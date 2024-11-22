import ResumeEditor from "@/components/shared/ResumeEditor";
import prisma from "@/lib/prisma";
import { resumeDataInclude } from "@/types";
import { auth } from "@clerk/nextjs/server";
import { Metadata } from "next";

interface EditorProps {
  searchParams: Promise<{ resumeId?: string }>;
}

export const metadata: Metadata = {
  title: "Design your CV",
};

const Editor = async ({ searchParams }: EditorProps) => {
  const { resumeId } = await searchParams;
  const { userId } = await auth();

  if (!userId) return null;

  const resumeToEdit = resumeId
    ? await prisma.resume.findUnique({
        where: { id: resumeId, userId },
        include: resumeDataInclude,
      })
    : null;
  return <ResumeEditor resumeToEdit={resumeToEdit} />;
};

export default Editor;
