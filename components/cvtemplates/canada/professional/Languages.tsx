import { FC } from "react";

interface Language {
  language: string;
  proficiency: string;
}

interface LanguagesProps {
  languages: Language[];
}

const Languages: FC<LanguagesProps> = ({ languages }) => {
  return (
    <section>
      <h2 className="mb-2 text-xl font-semibold">Languages</h2>
      {languages.map((lang, index) => (
        <p key={index}>
          {lang.language}: {lang.proficiency}
        </p>
      ))}
    </section>
  );
};

export default Languages;
