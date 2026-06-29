import dotenv from "dotenv"
dotenv.config()

import { OpenAI } from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main(): Promise<void> {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: "Explain TypeScript in one sentence." }
      ],
      temperature: 0.7,
    });

    console.log(response.choices[0].message.content);
  } catch (error) {
    console.error("Error calling OpenAI:", error);
  }
}

main();
