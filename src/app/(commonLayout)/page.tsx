import { Button } from "@/src/components/ui/button";
import { authClient } from "@/src/lib/auth-client";
import { userService } from "@/src/services/user.services";
import { cookies } from "next/headers";

export default async function Home() {
  const { data, error } = await userService.getSession();
  console.log(data);
  return (
    <div>
      <Button variant="destructive">Click Here</Button>
    </div>
  );
}
