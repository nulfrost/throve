import { NodeOAuthClient } from "@atproto/oauth-client-node";
import { StateStore, SessionStore } from "./storage";
import { db } from "@/db";

const IS_DEV = process.env.NODE_ENV === "development";
const PUBLIC_URL = "https://throve.site";
const LOCAL_URL = "http://[::1]:5173";
const URL = IS_DEV ? LOCAL_URL : PUBLIC_URL;

export const client = new NodeOAuthClient({
  clientMetadata: {
    client_name: "Throve - Feeds for the web",
    client_id: !IS_DEV
      ? `${PUBLIC_URL}/client-metadata.json`
      : `http://localhost?redirect_uri=${encodeURIComponent(
          `${URL}/oauth/callback`
        )}&scope=${encodeURIComponent("atproto transition:generic")}`,
    client_uri: URL,
    redirect_uris: [`${URL}/oauth/callback`],
    scope: "atproto transition:generic",
    grant_types: ["authorization_code", "refresh_token"],
    response_types: ["code"],
    application_type: "web",
    token_endpoint_auth_method: "none",
    dpop_bound_access_tokens: true,
  },
  stateStore: new StateStore(db),
  sessionStore: new SessionStore(db),
});
