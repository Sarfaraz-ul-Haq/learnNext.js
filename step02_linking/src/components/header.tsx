import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="flex bg-gray-200 p-3 gap-7">
      <Link href="/" className="text-blue-500">
        Home
      </Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/dashboard/settings">Settings</Link>
      <Link href="/dashboard/analytics">Analytics</Link>
      <Link href="/blog">Blog</Link>
      {/* <a href="/blog">Blog</a> (not recommended) */}
    </div>
  );
}

export default Header;
