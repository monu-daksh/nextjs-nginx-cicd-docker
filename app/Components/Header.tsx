"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md py-4 px-8 flex justify-between items-center fixed top-0 left-0 z-10">
      <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
        DevOps Dashboard
      </h1>
      <nav className="flex gap-4">
        <Link
          href="/signup"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Signup
        </Link>
        <Link
          href="/login"
          className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}
