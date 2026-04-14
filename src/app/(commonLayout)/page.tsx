import { Button } from "@/src/components/ui/button";
import { blogService } from "@/src/services/blog.services";

export default async function Home() {
  const { data } = await blogService.getBlogPosts();
  console.log(data.data.data.length);
  return (
    <div>
      <Button variant="destructive">Click Here</Button>
    </div>
  );
}
