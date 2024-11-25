"use server";

import openai from "../openai";
import {
  GenerateWorkExperienceInput,
  generateWorkExperienceSchema,
  WorkExperience,
} from "../validation";

const generateWorkExperience = async (input: GenerateWorkExperienceInput) => {
  // TODO: Blog for non-premium users

  const { description } = generateWorkExperienceSchema.parse(input);

  const systemMessage = `
        You are a job hunt expert, Your task is to generate a single work experience entry based on the user input.
        Your response must adhere to the following structure. You are can omit fields if they can't be infered from the provided data, but don't add any new ones.

        Job title: <job title>
        Company: <company name>
        Start date: <format: YYYY-MM-DD> (only if provided)
        End date: <format: YYYY-MM-DD> (only if provided)
        Description: <an optimized description in bullet format, might be infered from the job title>
    `;

  const userMessage = `
        Please provide a work experience entry from this descrioption:
        ${description}
    `;
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: systemMessage,
      },
      {
        role: "user",
        content: userMessage,
      },
    ],
  });

  const aiResponse = completion.choices[0].message.content;

  if (!aiResponse) {
    throw new Error("Failed to generate your summary.");
  }

  return {
    position: aiResponse.match(/Job title: (.*)/)?.[1] || "",
    company: aiResponse.match(/Company: (.*)/)?.[1] || "",
    description: aiResponse.match(/Description: ([\s\S]*)/)?.[1],
    startDate: aiResponse.match(/Start date: (\d{4}-\d{2}-\d{2})/)?.[1],
    endDate: aiResponse.match(/End date: (\d{4}-\d{2}-\d{2})/)?.[1],
  } satisfies WorkExperience;
};

export default generateWorkExperience;
