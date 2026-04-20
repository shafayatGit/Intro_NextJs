import { Card } from "@/src/components/ui/card";
import { blogService } from "@/src/services/blog.services";
import { BlogsType } from "@/src/types";

export default async function Home() {
  const { data } = await blogService.getBlogPosts(
    {
      isFeatured: true,
    },
    {
      // cache: "no-store",
      revalidate: 10,
    },
  );
  // console.log(data.data.data)
  return (
    <div className="grid grid-cols-3 gap-4 ">
      {data?.data?.data?.map((post: BlogsType) => (
        <Card key={post.id} />
      ))}
    </div>
  );
}
