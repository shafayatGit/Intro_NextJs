"use server";
import { updateTag } from "next/cache";
import { BlogPostParams, blogService } from "../services/blog.services";
import { BlogsType } from "../types";

export const getBlogs = async () => {
  const { data } = await blogService.getBlogPosts();
  return data?.data;
};

export const createBlog = async (blogData: BlogPostParams) => {
  const { data } = await blogService.createBlogPost(blogData);
  updateTag("blogPosts"); // Invalidate the cache for the "blogPosts" tag so that the next request will fetch the new data from the server.
  return data;
};
