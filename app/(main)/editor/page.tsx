import ResumeEditor from "@/components/shared/ResumeEditor";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design your CV",
};

const Editor = () => {
  return <ResumeEditor />;
};

export default Editor;
