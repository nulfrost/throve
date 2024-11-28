import { Input } from "@/components/ui/input";
import { Route } from "./+types/login";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Login() {
  return (
    <div className="flex justify-center items-center h-full">
      <Card className="max-w-xl flex-1">
        <CardContent className="pt-6">
          <h1 className="mb-4 font-bold text-xl text-center">Throve</h1>
          <form>
            <Label htmlFor="handle" className="block mb-2">
              Bluesky Handle
            </Label>
            <Input
              type="text"
              className="mb-4"
              name="handle"
              id="handle"
              placeholder="user@domain.com"
            />
            <Label htmlFor="password" className="block mb-2">
              Bluesky Password
            </Label>
            <Input
              type="password"
              className="mb-4"
              name="password"
              id="password"
            />
            <a
              href="https://bsky.app/settings/app-passwords"
              target="_blank"
              rel="noreferrer noopener"
              className="block text-blue-600 text-sm mb-4 hover:text-blue-700 duration-150"
            >
              Remember to generate an App Password &rarr;
            </a>
            <Button type="submit" className="w-full font-bold">
              Log in
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
