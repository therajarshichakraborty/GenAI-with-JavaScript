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
          content: "You are a helpful assistant that classifies text sentiment into Positive, Negative, or Neutral."
        },
        // --- Few-Shot Example 1 ---
        {
          role: "user",
          content: "I love the new design of your app! It is so intuitive."
        },
        {
          role: "assistant",
          content: "Sentiment: Positive"
        },
        // --- Few-Shot Example 2 ---
        {
          role: "user",
          content: "The delivery took three weeks and the packaging was damaged."
        },
        {
          role: "assistant",
          content: "Sentiment: Negative"
        },
        // --- Few-Shot Example 3 ---
        {
          role: "user",
          content: "The package arrived today."
        },
        {
          role: "assistant",
          content: "Sentiment: Neutral"
        },
        // --- The Actual Target Prompt ---
        {
          role: "user",
          content: "The product works fine, but it is nothing special."
        }
      ],
      temperature: 0.3, // Lower temperature keeps the output structured and predictable
    ]);

    console.log("Model Output:", response.choices[0].message.content);
    // Expected output: "Sentiment: Neutral" or "Sentiment: Negative" depending on nuance
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
  }
}

runFewShotPrompt();
