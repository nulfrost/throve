import type {
  NodeSavedSession,
  NodeSavedSessionStore,
  NodeSavedState,
  NodeSavedStateStore,
} from "@atproto/oauth-client-node";
import { states, sessions } from "@/db/schema";
import { type Database } from "@/db";
import { eq } from "drizzle-orm";

export class StateStore implements NodeSavedStateStore {
  constructor(private db: Database) {}
  async get(key: string): Promise<NodeSavedState | undefined> {
    const result = await this.db
      .select()
      .from(states)
      .where(eq(states.key, key));
    if (!result.length) return;
    return JSON.parse(result[0].state) as NodeSavedState;
  }
  async set(key: string, value: NodeSavedState) {
    const state = JSON.stringify(value);
    await this.db
      .insert(states)
      .values({ key, state })
      .onConflictDoUpdate({ target: states.key, set: { state } });
  }
  async del(key: string) {
    await this.db.delete(states).where(eq(states.key, key));
  }
}

export class SessionStore implements NodeSavedSessionStore {
  constructor(private db: Database) {}
  async get(key: string): Promise<NodeSavedSession | undefined> {
    const result = await this.db
      .select()
      .from(sessions)
      .where(eq(sessions.key, key));
    if (!result.length) return;
    return JSON.parse(result[0].session) as NodeSavedSession;
  }
  async set(key: string, value: NodeSavedSession) {
    const session = JSON.stringify(value);
    await this.db.insert(sessions).values({ key, session }).onConflictDoUpdate({
      target: sessions.key,
      set: { session },
    });
  }
  async del(key: string) {
    await this.db.delete(sessions).where(eq(sessions.key, key));
  }
}
