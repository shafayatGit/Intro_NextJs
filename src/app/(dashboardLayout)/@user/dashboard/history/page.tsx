import { getBlogs } from "@/src/actions/blog.actions";
import HistoryTable from "@/src/components/modules/user/historyTable";
import PaginationControls from "@/src/components/ui/paginationControls";
import { blogService } from "@/src/services/blog.services";
import React from "react";

export default async function HistoryPage({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const { page } = (await searchParams) || { page: "1" };
  //   console.log(p age);
  const response = await blogService.getBlogPosts(
    {
      page,
    },
    {
      cache: "no-store",
    },
  );
  const blogs = response?.data?.data.data || [];
  const pagination = response?.data?.data.pagination || { page: 1, limit: 10 };
  // console.log(pagination);
  return (
    <div>
      <HistoryTable blogs={blogs} />
      <PaginationControls meta={pagination} />
    </div>
  );
}
