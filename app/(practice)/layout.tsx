import Link from "next/link";
import React from "react";

export default function PracticeLayout({
  children,
  marketingSlot,
  salesSlot,
}: {
  children: React.ReactNode;
  marketingSlot: React.ReactNode;
  salesSlot: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex gap-10 m-8">
        <Link href={"/development"}>Development</Link>
        <Link href={"/marketing"}>Marketing</Link>
        <Link href={"/marketing/settings"}>Settings</Link>
        <Link href={"/sales"}>Sales</Link>
      </div>
      <div className="flex">
        {marketingSlot}
        {salesSlot}
      </div>
      {children}
    </div>
  );
}
