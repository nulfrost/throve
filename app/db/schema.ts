import { relations } from "drizzle-orm";
import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { nanoid } from "nanoid";

export const users = pgTable("users", {
  id: text("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => nanoid()),
  did: text("did").notNull(),
  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at").notNull().defaultNow(),
});

export const feeds = pgTable("feeds", {
  id: text("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => nanoid()),
  url: text("url").notNull(),
  name: text("name").notNull(),
  description: text("description"),
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
  url: text("url").notNull(),
  position: integer(),
  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at").notNull().defaultNow(),
  indexed_at: timestamp("updated_at").notNull().defaultNow(),
  feed_id: text("feed_id"),
});

export const sessions = pgTable("sessions", {
  key: text("key").primaryKey().unique(),
  session: text("session").notNull(),
});

export const states = pgTable("states", {
  key: text("key").primaryKey().unique(),
  state: text("state").notNull(),
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
