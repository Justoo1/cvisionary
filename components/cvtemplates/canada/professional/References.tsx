import { FC } from "react";

interface ReferencesProps {
  content: string;
}

const References: FC<ReferencesProps> = ({ content }) => {
  return (
    <section>
      <h2 className="mb-2 text-xl font-semibold">References</h2>
      <p>{content}</p>
    </section>
  );
};

export default References;
