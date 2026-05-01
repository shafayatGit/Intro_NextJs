import { getBlogs } from "@/src/actions/blog.actions";
import HistoryTable from "@/src/components/modules/user/historyTable";
import { blogService } from "@/src/services/blog.services";
import React from "react";

export default async function HistoryPage() {
  const response = await blogService.getBlogPosts();
  const blogs = response?.data?.data || [];
  console.log(blogs);
  return (
    <div>
      <HistoryTable />
    </div>
  );
}
