import "dotenv/config";
import { defineConfig } from "drizzle-kit";
import { env } from "@/env.server";

export default defineConfig({
  out: "./drizzle",
  dialect: "postgresql",
  schema: "./app/db/schema.ts",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
