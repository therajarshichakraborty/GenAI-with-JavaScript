import dotenv from "dotenv"
dotenv.config()

import { OpenAI } from "openai";
import env from "./env";

const client = new OpenAI({
  apiKey: env.OPEN_API_KEY,
  baseURL: "",
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
