"use client";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./pagination";
import { useRouter, useSearchParams } from "next/navigation";

export default function PaginationControls({
  meta,
}: {
  meta: { page: number; limit: number };
}) {
  const router = useRouter();
  const { page: currentPage, limit: pageSize } = meta;

  const searchParams = useSearchParams();

  const navigateToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  //   co  /nsole.log(page);
  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => {
                navigateToPage(currentPage - 1);
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={() => {
                navigateToPage(1);
              }}
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={() => {
                navigateToPage(2);
              }}
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={() => {
                navigateToPage(3);
              }}
            >
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={() => {
                navigateToPage(currentPage + 1);
              }}
            
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
