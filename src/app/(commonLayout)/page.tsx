import BlogCard from "@/src/components/ui/blogCard";
import { blogService } from "@/src/services/blog.services";
import { BlogsType } from "@/src/types";
import { Button } from "@base-ui/react";

export default async function Home() {
  const { data } = await blogService.getBlogPosts(
    {
      // isFeatured: false,
    },
    {
      // cache: "no-store",
      // revalidate: 10,
    },
  );
  // console.log(data.data.data)
  return (
    <div>
      <BlogCard data={data as BlogsType} />
    </div>
  );
}
