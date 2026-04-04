import Link from "next/link";
import React from "react";

export default function PracticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex gap-10 m-8">
        <Link href={"/development"}>Button</Link>
        <Link href={"/marketing"}>Marketing</Link>
        <Link href={"/marketing/settings"}>Settings</Link>
        <Link href={"/sales"}>Sales</Link>
      </div>
      {children}
    </div>
  );
}
