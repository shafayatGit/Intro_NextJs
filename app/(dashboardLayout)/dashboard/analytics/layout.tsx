import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AnalyticsPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <Link href={"monthly"}>
          <Button variant="default">Monthly</Button>
        </Link>
        <Link href={"weekly"}>
          <Button variant="default">Weekly</Button>
        </Link>
      </div>
      {children}
    </div>
  );
}
