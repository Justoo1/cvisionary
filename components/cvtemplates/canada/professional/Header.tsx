import { FC } from "react";

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
}

interface HeaderProps {
  name: string;
  title: string;
  contact: ContactInfo;
}

const Header: FC<HeaderProps> = ({ name, title, contact }) => {
  return (
    <header className="mb-6 text-center">
      <h1 className="mb-2 text-3xl font-bold">{name}</h1>
      <p className="mb-4 text-xl text-gray-600">{title}</p>
      <div className="flex justify-center space-x-4 text-sm">
        <span>{contact.email}</span>
        <span>{contact.phone}</span>
        <span>{contact.location}</span>
        <span>{contact.linkedin}</span>
      </div>
    </header>
  );
};

export default Header;
