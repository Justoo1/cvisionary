import ModernCV from "@/components/cvtemplates/canada/creative/Creative";
import CanadianProfessionalCV from "@/components/cvtemplates/canada/professional/Professional";
import { Country, TemplatesByCountry } from "@/types";

export const templates: TemplatesByCountry = {
  ca: [
    {
      id: "ca1",
      name: "Canadian Professional",
      component: CanadianProfessionalCV,
    },
    { id: "ca2", name: "Canadian Creative", component: ModernCV },
    { id: "ca3", name: "Canadian Academic", component: CanadianProfessionalCV },
  ],
  //   us: [
  //     { id: "us1", name: "US Corporate" },
  //     { id: "us2", name: "US Modern" },
  //   ],
  //   uk: [
  //     { id: "uk1", name: "UK Traditional" },
  //     { id: "uk2", name: "UK Contemporary" },
  //   ],
  // Add templates for other countries
};

export const countries: Country[] = [
  { id: "ca", name: "Canada" },
  { id: "us", name: "United States" },
  { id: "uk", name: "United Kingdom" },
  { id: "gh", name: "Ghana" },
  // Add more countries as needed
];
