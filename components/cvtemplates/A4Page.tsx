import React from "react";

interface A4PageProps {
  children: React.ReactNode;
}

const A4Page = ({ children }: A4PageProps) => {
  return (
    <div className="aspect-[1/1.4142] w-full max-w-[210mm] bg-white shadow-lg">
      <div className="h-full overflow-hidden border border-gray-200 p-4 sm:p-8">
        <div className="prose prose-sm sm:prose h-full max-w-none overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export default A4Page;
