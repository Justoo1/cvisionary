import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | CVisionary",
    absolute: "CVisionary",
  },
  description: "AI Powered Resume Builder",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
