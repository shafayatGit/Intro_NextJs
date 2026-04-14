import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { userService } from "@/services/user.services";
import { cookies } from "next/headers";

export default async function Home() {
  const { data, error } = await userService.getSession();
  console.log(data.user);
  return (
    <div>
      <Button variant="destructive">Click Here</Button>
    </div>
  );
}
