"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import CountrySelector from "./CountrySelector";
import Sidebar from "./SideBar";
import Preview from "./Preview";
import { Country, TemplateProps, TemplatesByCountry } from "@/types";
import { countries } from "@/app/(template)/cv-templates/templates";

interface CVTemplateSelection {
  templates: TemplatesByCountry;
}

const TemplateSelection = ({ templates }: CVTemplateSelection) => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(
    countries[0] || null,
  );

  const [selectedTemplate, setSelectedTemplate] =
    useState<TemplateProps | null>(null);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const handleCountryChange = (country: Country) => {
    setSelectedCountry(country);
  };

  useEffect(() => {
    if (selectedCountry && templates[selectedCountry.id]) {
      setSelectedTemplate(templates[selectedCountry.id][0] || null);
    } else {
      setSelectedTemplate(null);
    }
  }, [selectedCountry, templates]);
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <div className="flex flex-shrink-0 items-center justify-between border-b p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="md:hidden"
        >
          <Menu />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
        {countries.length > 0 && (
          <CountrySelector
            countries={countries}
            selectedCountry={selectedCountry}
            onSelectCountry={handleCountryChange}
          />
        )}
      </div>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          templates={templates[selectedCountry!.id] || []}
          selectedTemplate={selectedTemplate}
          onSelectTemplate={setSelectedTemplate}
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
        />
        <Preview
          selectedTemplate={selectedTemplate}
          country={selectedCountry}
        />
      </div>
    </div>
  );
};

export default TemplateSelection;
