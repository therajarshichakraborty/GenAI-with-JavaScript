//@ts-nocheck
import OpenAI from "openai";

// Initialize the client. It automatically picks up process.env.OPENAI_API_KEY
const openai = new OpenAI();

async function runFewShotPrompt() {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o", // You can use gpt-4o, gpt-4-turbo, or gpt-3.5-turbo
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that classifies text sentiment into Positive, Negative, or Neutral.",
        },

        // --- Few-Shot Example 1 ---
        {
          role: "user",
          content: "I love the new design of your app! It is so intuitive.",
        },
        {
          role: "assistant",
          content: "Sentiment: Positive",
        },

        // --- Few-Shot Example 2 ---
        ...
      ],
    });
  } catch (err) {
    console.error(err);
  }
}