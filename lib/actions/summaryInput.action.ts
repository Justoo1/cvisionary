"use server";

import openai from "../openai";
import { GenerateSummaryInput, generateSummarySchema } from "../validation";

const generateSummary = async (input: GenerateSummaryInput) => {
  // TODO: Block for non-premium users

  const { jobTitle, workExperiences, educations, skills } =
    generateSummarySchema.parse(input);

  const systemMessage = `
        You are a job hunt expert, I want you to help write a professional resume summary given the user's provided data.
        only give me back the summary and do nnot include any other information in the response. Keep it concise and professional
    `;

  const userMessage = `
        Please generate a professional resume summary from this data:

        Job title: ${jobTitle || "N/A"}

        Work experience:
        ${workExperiences
          ?.map(
            (exp) => `
                Position: ${exp?.position || "N/A"} at ${exp?.company || "N/A"} from ${exp?.startDate || "N/A"} to ${exp?.endDate || "Present"}

                Description: 
                ${exp?.description || "N/A"}
            `,
          )
          .join("\n\n")}

        Education:
        ${educations
          ?.map(
            (edu) => `
                Degree: ${edu?.degree || "N/A"} at ${edu?.school || "N/A"} from ${edu?.startDate || "N/A"} to ${edu?.endDate || "Ongiong"}
            `,
          )
          .join("\n\n")}

        Skills:
        ${skills}
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

  return aiResponse;
};

export default generateSummary;
