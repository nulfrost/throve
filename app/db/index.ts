import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { env } from "@/env.server";

export const db = drizzle(env.DATABASE_URL);

export type Database = typeof db;
