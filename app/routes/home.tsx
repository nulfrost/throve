import { client } from "@/atproto/client";
import type { Route } from "./+types/home";
import { getSession } from "@/session";
import { Agent } from "@atproto/api";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  const did = session.get("did") as string;

  const oauthSession = await client.restore(did);

  const agent = new Agent(oauthSession);

  const user = await agent.app.bsky.actor.getProfile({
    actor: did,
  });

  console.dir(user, { depth: Infinity });

  return null;
}

export default function Home() {
  return null;
}
