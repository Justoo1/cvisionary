import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CVisionary | Templates Selection",
  description: "AI Powered Resume Builder",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex min-h-screen flex-col">{children}</div>;
}
