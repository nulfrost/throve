import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Route } from "./+types/login";
import { client } from "@/atproto/client";
import { redirect } from "react-router";

export function meta() {
  return [
    { title: "Throve - Login" },
    { name: "description", content: "Log in to continue to Throve." },
  ];
}

// do proper validations here for handles

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const handle = formData.get("handle") as string;

  if (typeof handle !== "string") {
    throw new Error("Invalid handle");
  }

  const ac = new AbortController();

  const url = await client.authorize(handle, {
    signal: ac.signal,
    ui_locales: "en-CA",
  });

  throw redirect(url.toString());
}

export default function Login() {
  return (
    <div className="flex justify-center items-center h-full">
      <Card className="max-w-xl flex-1">
        <CardContent className="pt-6">
          <h1 className="mb-4 font-bold text-xl text-center">Throve</h1>
          <form method="POST">
            <Label htmlFor="handle" className="block mb-2">
              Bluesky Handle
            </Label>
            <Input type="text" className="mb-4" name="handle" id="handle" />
            <Button type="submit" className="w-full font-bold">
              Log in
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
