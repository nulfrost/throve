import { relations } from "drizzle-orm";
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
  url: varchar({ length: 255 }).notNull(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }),
  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at").notNull().defaultNow(),
  indexed_at: timestamp("updated_at").notNull().defaultNow(),
  user_id: text("user_id"),
});

export const links = pgTable("links", {
  id: text("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => nanoid()),
  url: varchar({ length: 255 }).notNull(),
  position: integer(),
  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at").notNull().defaultNow(),
  indexed_at: timestamp("updated_at").notNull().defaultNow(),
  feed_id: text("feed_id"),
});

export const sessions = pgTable("sessions", {
  key: varchar({ length: 255 }).primaryKey().unique(),
  session: varchar({ length: 255 }).notNull(),
});

export const states = pgTable("states", {
  key: varchar({ length: 255 }).primaryKey().unique(),
  state: varchar({ length: 255 }).notNull(),
});

export const usersRelations = relations(users, ({ many }) => ({
  feeds: many(feeds),
}));

export const feedsRelations = relations(feeds, ({ one, many }) => ({
  user: one(users, {
    fields: [feeds.user_id],
    references: [users.id],
  }),
  links: many(links),
}));

export const linksRelations = relations(links, ({ one }) => ({
  feed: one(feeds, {
    fields: [links.feed_id],
    references: [feeds.id],
  }),
}));
