"use server";
import { blogService } from "../services/blog.services";

export const getBlogs = async () => {
  const { data } = await blogService.getBlogPosts();
  return data?.data;
};
