import CreateBlogClient from "@/src/components/modules/user/createBlogClient";
import CreateBlogServer from "@/src/components/modules/user/createBlogServer";
import { blogService } from "@/src/services/blog.services";
import { BlogsType } from "@/src/types";

export default async function CreateBlogPage() {
  const { data } = await blogService.getBlogPosts({}, { cache: "no-store" }); //We can set the cache option to "no-store" to disable caching or "force-cache" to force caching or "default" to use the default caching behavior of the browser
  // console.log(data.data);
  return (
    <div>
      {/* <CreateBlogServer /> */}
      <CreateBlogClient />
      {data?.data?.data?.map((blog: BlogsType) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}
