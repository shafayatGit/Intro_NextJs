import BlogCard from "@/src/components/ui/card";
import { blogService } from "@/src/services/blog.services";
import { BlogsType } from "@/src/types";
import { Button } from "@base-ui/react";

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
    <div>
      <BlogCard data={data as BlogsType} />
    </div>
  );
}
