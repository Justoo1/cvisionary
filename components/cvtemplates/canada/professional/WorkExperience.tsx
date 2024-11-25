import { FC } from "react";

interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

interface WorkExperienceProps {
  experiences: Experience[];
}

const WorkExperience: FC<WorkExperienceProps> = ({ experiences }) => {
  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold">Work Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-semibold">{exp.title}</h3>
          <p className="text-gray-600">
            {exp.company} | {exp.location}
          </p>
          <p className="text-gray-600">
            {exp.startDate} - {exp.endDate}
          </p>
          <ul className="mt-2 list-inside list-disc">
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;
