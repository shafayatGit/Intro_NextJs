"use client";
import { BlogsType } from "@/src/types";
import { Button } from "@base-ui/react";
import Link from "next/link";
import React from "react";

export default function BlogCard( {data} : BlogsType) {
  return (
    <div className="grid grid-cols-3 gap-4 justify-items-center max-w-7xl mx-auto py-10">
      {data?.data?.data?.map((post: BlogsType) => (
        <div
          className="p-3 border-2 border-amber-950 rounded-2xl flex flex-col gap-3"
          key={post.id}
        >
          <h1>Title: {post.title}</h1>
          <p>Content: {post.content}</p>
          <div className="flex gap-2">
            Tags:
            {post.tags.map((tag, index) => (
              <span className="border border-e-yellow-100" key={index}>
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex justify-between">
              <span>Views: {post.views}</span>
              <span>Comments: {post._count?.comment || 0}</span>
            </div>
            <Link href={`/blogs/${post.id}`} className="self-end mt-4">
              {" "}
              <Button>Read More</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
