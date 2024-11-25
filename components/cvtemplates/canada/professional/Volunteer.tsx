import { FC } from "react";

interface VolunteerExperience {
  organization: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface VolunteerProps {
  experiences: VolunteerExperience[];
}

const Volunteer: FC<VolunteerProps> = ({ experiences }) => {
  return (
    <section>
      <h2 className="mb-2 text-xl font-semibold">Volunteer Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-2">
          <h3 className="font-semibold">{exp.role}</h3>
          <p>{exp.organization}</p>
          <p className="text-gray-600">
            {exp.startDate} - {exp.endDate}
          </p>
          <p>{exp.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Volunteer;
