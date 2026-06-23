import OpenAI from "openai";

// Automatically picks up the OPENAI_API_KEY environment variable
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});

async function main(): Promise<void> {
  try {
    const response = await openai.chat.completions.create({
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
