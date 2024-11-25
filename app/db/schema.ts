import { pgTable, varchar } from "drizzle-orm/pg-core";

export const statusTable = pgTable("status_table", {
  uri: varchar({ length: 255 }).primaryKey().unique(),
  author_did: varchar({ length: 255 }).notNull(),
  status: varchar({ length: 255 }).notNull(),
  created_at: varchar({ length: 255 }).notNull(),
  indexed_at: varchar({ length: 255 }).notNull(),
});

export const authSessionTable = pgTable("auth_session_table", {
  key: varchar({ length: 255 }).primaryKey().unique(),
  session: varchar({ length: 255 }).notNull(),
});

export const authStateTable = pgTable("auth_state_table", {
  key: varchar({ length: 255 }).primaryKey().unique(),
  state: varchar({ length: 255 }).notNull(),
});
