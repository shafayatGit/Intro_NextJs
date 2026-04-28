import { blogService } from "@/src/services/blog.services";
import { BlogsType } from "@/src/types";
import { Eye, MessageCircle, User } from "lucide-react";

//!export const dynamicParams = false;
// rest of the pages will shown 404 if we try to access them because we are going to generate only 3 static pages(SSG) and for the rest of the data we will use dynamic rendering(SSR). Sometimes needed.

//*We have to retuen basically [ {slug: "asdfjhdjff"},{slug: "lkgkjdsfdlsjfdkf"} ] this type of array from generateStaticParams function because nextjs will use this array to generate static pages for each blog post based on the slug. So we have to fetch all the blog posts and then map through them and return the slug of each blog post in the required format.
export async function generateStaticParams() {
  const { data } = await blogService.getBlogPosts();
  return data?.data?.data.map((blog: BlogsType) => ({
    // that will return array of objects with id/slug
    slug: blog.id.toString().slice(0, 3), //that means we are going to make only 3 static data(SSG) and for the rest of the data we will use dynamic rendering(SSR).
  }));
}

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data } = await blogService.getBlogPostById(slug);
  const post = data?.data;

  return (
    <article className="max-w-4xl mx-auto my-12 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="p-8">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-full uppercase tracking-wider"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Title & Meta */}
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center text-sm text-slate-500 dark:text-slate-400 gap-6 mb-8 pb-8 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Eye size={16} />
            <span>{post.views} views</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle size={16} />
            <span>{post._count.comments} comments</span>
          </div>
          <div className="flex items-center gap-2">
            <User size={16} />
            <span className="truncate max-w-25">
              ID: {post.authorId.slice(0, 8)}...
            </span>
          </div>
        </div>

        {/* Post Content */}
        <div className="prose prose-slate dark:prose-invert lg:prose-lg max-w-none">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {post.content}
          </p>
        </div>

        {/* Status Badge */}
        {post.isFeatured && (
          <div className="mt-8">
            <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-amber-100 text-amber-800">
              Featured Post
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
