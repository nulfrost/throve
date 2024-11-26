import {
  integer,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { nanoid } from "nanoid";

export const users = pgTable("users", {
  id: text("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => nanoid()),
  did: varchar({ length: 255 }).notNull(),
  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at").notNull().defaultNow(),
});

export const feeds = pgTable("feeds", {
  id: text("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => nanoid()),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }),
  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at").notNull().defaultNow(),
});

export const links = pgTable("links", {
  id: text("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => nanoid()),
  url: text("url").notNull(),
  position: integer(),
  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at").notNull().defaultNow(),
});

export const status = pgTable("status", {
  uri: varchar({ length: 255 }).primaryKey().unique(),
  author_did: varchar({ length: 255 }).notNull(),
  status: varchar({ length: 255 }).notNull(),
  created_at: varchar({ length: 255 }).notNull(),
  indexed_at: varchar({ length: 255 }).notNull(),
});

export const sessions = pgTable("sessions", {
  key: varchar({ length: 255 }).primaryKey().unique(),
  session: varchar({ length: 255 }).notNull(),
});

export const states = pgTable("states", {
  key: varchar({ length: 255 }).primaryKey().unique(),
  state: varchar({ length: 255 }).notNull(),
});
