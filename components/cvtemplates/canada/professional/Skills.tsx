import { FC } from "react";

interface SkillsProps {
  technicalSkills: string[];
  softSkills: string[];
}

const Skills: FC<SkillsProps> = ({ technicalSkills, softSkills }) => {
  return (
    <section>
      <h2 className="mb-2 text-xl font-semibold">Skills</h2>
      <div>
        <h3 className="font-semibold">Technical Skills</h3>
        <p>{technicalSkills.join(", ")}</p>
      </div>
      <div className="mt-2">
        <h3 className="font-semibold">Soft Skills</h3>
        <p>{softSkills.join(", ")}</p>
      </div>
    </section>
  );
};

export default Skills;
