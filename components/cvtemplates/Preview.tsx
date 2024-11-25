import { TemplateProps } from "@/types";

interface Country {
  id: string;
  name: string;
}

interface PreviewProps {
  selectedTemplate: TemplateProps | null;
  country: Country | null;
}

export default function Preview({ selectedTemplate, country }: PreviewProps) {
  if (!selectedTemplate || !country) {
    return (
      <div className="flex flex-1 items-center justify-center bg-gray-200 p-4">
        <p className="text-gray-500">
          Please select a country and template to preview.
        </p>
      </div>
    );
  }

  const TemplateComponent = selectedTemplate.component;

  return (
    <div className="flex-1 overflow-y-auto bg-gray-200 p-4">
      <div className="mx-auto max-w-[210mm] origin-top scale-100 transform space-y-8 sm:scale-90 md:scale-100">
        {/* {pages.map((page) => (
          <A4Page key={page.id} content={page.content} />
        ))} */}
        <TemplateComponent />
      </div>
    </div>
  );
}
