import { FC } from "react";

interface Certification {
  name: string;
  issuer: string;
  date: string;
}

interface CertificationsProps {
  certifications: Certification[];
}

const Certifications: FC<CertificationsProps> = ({ certifications }) => {
  return (
    <section>
      <h2 className="mb-2 text-xl font-semibold">Certifications</h2>
      {certifications.map((cert, index) => (
        <div key={index} className="mb-2">
          <h3 className="font-semibold">{cert.name}</h3>
          <p>
            {cert.issuer} | {cert.date}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Certifications;
