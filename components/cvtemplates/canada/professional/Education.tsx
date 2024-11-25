import { FC } from "react";

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  graduationDate: string;
}

interface EducationProps {
  education: EducationItem[];
}

const Education: FC<EducationProps> = ({ education }) => {
  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-2">
          <h3 className="font-semibold">{edu.degree}</h3>
          <p>
            {edu.institution}, {edu.location}
          </p>
          <p className="text-gray-600">Graduated: {edu.graduationDate}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
