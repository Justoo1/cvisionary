import React from "react";
import { templates } from "./templates";
import TemplateSelection from "@/components/cvtemplates/TemplateSelection";

const TemplatePage = () => {
  return <TemplateSelection templates={templates} />;
};

export default TemplatePage;
