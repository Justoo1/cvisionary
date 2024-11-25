import { FC } from "react";

interface SummaryProps {
  content: string;
}

const Summary: FC<SummaryProps> = ({ content }) => {
  return (
    <section>
      <h2 className="mb-2 text-xl font-semibold">Professional Summary</h2>
      <p>{content}</p>
    </section>
  );
};

export default Summary;
