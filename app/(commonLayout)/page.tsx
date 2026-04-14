import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const res = await fetch("http://localhost:8000/api/auth/get-session", {
    headers: {
      cookie: cookieStore.toString(), //map take string akare pathaye dey
    },
    cache: "no-store", // We dont want to cache the user data
  });
  const session = await res.json();
  console.log(session.user);

  return (
    <div>
      <Button variant="destructive">Click Here</Button>
    </div>
  );
}
