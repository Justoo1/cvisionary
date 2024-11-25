import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TemplateProps } from "@/types";
import { X } from "lucide-react";

interface SidebarProps {
  templates: TemplateProps[];
  selectedTemplate: TemplateProps | null;
  onSelectTemplate: (template: TemplateProps) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({
  templates,
  selectedTemplate,
  onSelectTemplate,
  isOpen,
  onClose,
}: SidebarProps) => {
  return (
    <div
      className={cn(
        "h-full w-64 overflow-y-auto bg-gray-100 p-4 transition-all duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        "absolute z-10 md:relative", // Make it overlay on small screens, normal on larger screens
      )}
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">CV Templates</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="md:hidden"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close sidebar</span>
        </Button>
      </div>
      <div className="space-y-2">
        {templates.map((template) => (
          <Button
            key={template.id}
            onClick={() => onSelectTemplate(template)}
            variant={
              selectedTemplate?.id === template.id ? "default" : "outline"
            }
            className="w-full justify-start"
          >
            {template.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
