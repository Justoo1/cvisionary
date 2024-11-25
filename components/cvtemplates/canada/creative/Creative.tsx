"use client";

import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin } from "lucide-react";
import useDimensions from "@/hooks/useDimensions";
import A4Page from "../../A4Page";

const ModernCV = () => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  const [accentColor, setAccentColor] = useState("#D4C3B5");
  const cvRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { width } = useDimensions(containerRef);

  return (
    <div className="mx-auto max-w-4xl space-y-8 p-4">
      {/* Color Controls */}
      <div className="mb-8 flex gap-4">
        <div>
          <Label htmlFor="backgroundColor">Background Color</Label>
          <Input
            type="color"
            id="backgroundColor"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            className="h-10 w-20"
          />
        </div>
        <div>
          <Label htmlFor="textColor">Text Color</Label>
          <Input
            type="color"
            id="textColor"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            className="h-10 w-20"
          />
        </div>
        <div>
          <Label htmlFor="accentColor">Accent Color</Label>
          <Input
            type="color"
            id="accentColor"
            value={accentColor}
            onChange={(e) => setAccentColor(e.target.value)}
            className="h-10 w-20"
          />
        </div>
      </div>

      {/* CV Content */}
      <div
        ref={cvRef}
        className="overflow-hidden rounded-lg border shadow-lg"
        style={{
          backgroundColor,
        }}
      >
        <A4Page>
          <div style={{ color: textColor, zoom: (1 / 794) * width }}>
            {/* Header Section */}
            <div className="flex items-center gap-8">
              <div className="h-32 w-32 overflow-hidden rounded-full bg-gray-200">
                <img
                  src="/placeholder.svg?height=128&width=128"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h1 className="mb-2 text-4xl font-bold">
                  <span>SARAH </span>
                  <span style={{ color: accentColor }}>MOORE</span>
                </h1>
                <p className="mb-4 text-lg uppercase tracking-wide">
                  Professional Title
                </p>
                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>555-555-555</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>youremail@mail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>123 New York, NY</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-[300px_1fr] gap-8">
              {/* Left Column */}
              <div className="space-y-8">
                <section>
                  <h2
                    className="mb-4 border-b pb-2 text-xl font-bold"
                    style={{ borderColor: accentColor }}
                  >
                    EDUCATION
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">DEGREE NAME</h3>
                      <p>University Location</p>
                      <p className="text-sm">2013 - 2016</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">DEGREE NAME</h3>
                      <p>University Location</p>
                      <p className="text-sm">2013 - 2016</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2
                    className="mb-4 border-b pb-2 text-xl font-bold"
                    style={{ borderColor: accentColor }}
                  >
                    EXPERTISE
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="mb-2 font-semibold">PROFESSIONAL</h3>
                      <ul className="list-inside list-disc space-y-1">
                        <li>Collaboration</li>
                        <li>Adaptability</li>
                        <li>Problem Solving</li>
                        <li>Handling Conflict</li>
                        <li>Strategic Thinking</li>
                        <li>People Skills</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold">TECHNICAL</h3>
                      <ul className="list-inside list-disc space-y-1">
                        <li>Skill One</li>
                        <li>Skill Two</li>
                        <li>Skill Three</li>
                        <li>Skill Four</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <section>
                  <h2
                    className="mb-4 border-b pb-2 text-xl font-bold"
                    style={{ borderColor: accentColor }}
                  >
                    CAREER SUMMARY
                  </h2>
                  <p className="text-justify">
                    The most persuasive resume begins with a powerful pitch.
                    Prove that you are the perfect candidate for their company
                    by summarizing your achievements and explaining how they
                    will benefit the company. Create statements that highlight
                    your strengths and what makes YOU unique not just an
                    objective description about yourself. When possible,
                    quantify your statements with numbers or data to make them
                    more convincing.
                  </p>
                </section>

                <section>
                  <h2
                    className="mb-4 border-b pb-2 text-xl font-bold"
                    style={{ borderColor: accentColor }}
                  >
                    WORK EXPERIENCE
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold">Position Title Here</h3>
                      <p className="mb-2 text-sm">
                        Company Location | Date - Present
                      </p>
                      <ul className="list-inside list-disc space-y-2">
                        <li>
                          Tailoring your resume to suit the position you are
                          applying for is the most important because it ensures
                          your resume will actually get picked up as a good
                          match for the job.
                        </li>
                        <li>
                          Employers want to know what you accomplished. Make it
                          easy for them and mention what you achieved, then
                          contextualize it - with figures if possible.
                        </li>
                        <li>
                          For example, as Regional Sales Manager, developed
                          aggressive marketing campaigns and channel marketing
                          programs increasing revenue from $5 million to $25
                          million over a four-year time period.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Position Title Here</h3>
                      <p className="mb-2 text-sm">
                        Company Location | Date - Date
                      </p>
                      <ul className="list-inside list-disc space-y-2">
                        <li>Key achievement or responsibility</li>
                        <li>Key achievement or responsibility</li>
                        <li>Key achievement or responsibility</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Position Title Here</h3>
                      <p className="mb-2 text-sm">
                        Company Location | Date - Date
                      </p>
                      <ul className="list-inside list-disc space-y-2">
                        <li>Key achievement or responsibility</li>
                        <li>Key achievement or responsibility</li>
                        <li>Key achievement or responsibility</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Position Title Here</h3>
                      <p className="mb-2 text-sm">
                        Company Location | Date - Date
                      </p>
                      <ul className="list-inside list-disc space-y-2">
                        <li>Key achievement or responsibility</li>
                        <li>Key achievement or responsibility</li>
                        <li>Key achievement or responsibility</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">Position Title Here</h3>
                      <p className="mb-2 text-sm">
                        Company Location | Date - Date
                      </p>
                      <ul className="list-inside list-disc space-y-2">
                        <li>Key achievement or responsibility</li>
                        <li>Key achievement or responsibility</li>
                        <li>Key achievement or responsibility</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </A4Page>
      </div>
    </div>
  );
};

export default ModernCV;
