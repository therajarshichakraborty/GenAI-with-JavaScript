import dotenv from "dotenv";
dotenv.config();

import { z } from "zod";

const envSchema = z.object({
    OPENAI_API_KEY: z.string().optional(),
    GEMINI_API_KEY: z.string().optional(),
    ANTHROPIC_API_KEY: z.string().optional(),
    GROK_API_KEY: z.string().optional(),
});

const env = envSchema.parse(process.env);

export default env;