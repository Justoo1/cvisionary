"use client";

import { FC } from "react";
import Header from "./Header";
import Summary from "./Summary";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";
import Certifications from "./Certification";
import Languages from "./Languages";
import Volunteer from "./Volunteer";
import References from "./References";
import A4Page from "../../A4Page";

const CanadianProfessionalCV: FC = () => {
  return (
    <A4Page>
      <div className="space-y-6">
        <Header
          name="John Doe"
          title="Software Engineer"
          contact={{
            email: "john.doe@email.com",
            phone: "+1 (123) 456-7890",
            location: "Toronto, ON",
            linkedin: "linkedin.com/in/johndoe",
          }}
        />
        <Summary content="Experienced software engineer with 5+ years of expertise in developing scalable web applications. Proficient in React, Node.js, and cloud technologies. Committed to delivering high-quality code and driving innovation in agile environments." />
        <WorkExperience
          experiences={[
            {
              title: "Senior Software Engineer",
              company: "Tech Innovations Inc.",
              location: "Toronto, ON",
              startDate: "January 2020",
              endDate: "Present",
              responsibilities: [
                "Lead a team of 5 developers in designing and implementing microservices architecture",
                "Reduced system downtime by 30% through implementation of robust error handling and monitoring",
                "Mentored junior developers, improving team productivity by 25%",
              ],
            },
            {
              title: "Software Developer",
              company: "Digital Solutions Ltd.",
              location: "Vancouver, BC",
              startDate: "June 2017",
              endDate: "December 2019",
              responsibilities: [
                "Developed and maintained multiple client-facing web applications using React and Node.js",
                "Implemented CI/CD pipelines, reducing deployment time by 40%",
                "Collaborated with UX team to improve application usability, resulting in a 20% increase in user satisfaction",
              ],
            },
          ]}
        />
        <Education
          education={[
            {
              degree: "Bachelor of Science in Computer Science",
              institution: "University of Toronto",
              location: "Toronto, ON",
              graduationDate: "May 2017",
            },
            {
              degree: "Full-Stack Web Development Bootcamp",
              institution: "Coding Academy",
              location: "Toronto, ON",
              graduationDate: "August 2017",
            },
          ]}
        />
        <Skills
          technicalSkills={[
            "JavaScript",
            "TypeScript",
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "AWS",
            "Docker",
            "Git",
          ]}
          softSkills={[
            "Team Leadership",
            "Agile Methodologies",
            "Problem Solving",
            "Communication",
            "Mentoring",
          ]}
        />
        <Certifications
          certifications={[
            {
              name: "AWS Certified Solutions Architect",
              issuer: "Amazon Web Services",
              date: "September 2021",
            },
            {
              name: "Certified Scrum Master (CSM)",
              issuer: "Scrum Alliance",
              date: "March 2020",
            },
          ]}
        />
        <Languages
          languages={[
            { language: "English", proficiency: "Native" },
            {
              language: "French",
              proficiency: "Professional working proficiency",
            },
          ]}
        />
        <Volunteer
          experiences={[
            {
              organization: "Code for Canada",
              role: "Volunteer Developer",
              startDate: "January 2019",
              endDate: "Present",
              description:
                "Contribute to open-source projects aimed at improving public services in Canada.",
            },
          ]}
        />
        <References content="References available upon request" />
      </div>
    </A4Page>
  );
};

export default CanadianProfessionalCV;
