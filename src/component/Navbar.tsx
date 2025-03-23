
"use client";
import Link from "next/link";
import { useAuth } from "../hooks/useAuth";
import { useRole } from "@/hooks/useRole";

export default function Navbar() {
  const { user, logout } = useAuth();
  const isAdmin = useRole("admin");
  if (!user) return null; // Oculta a Navbar se não estiver logado

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <div className="flex row-span-4">
        <Link href="/" className="text-white hover:underline text-2xl ml-2">
          HOME
        </Link>
        <Link
          href="/about"
          className="text-white hover:underline text-2xl ml-10"
        >
          ABOUT
        </Link>
        {isAdmin && (
          <Link
            href="/settings"
            className="text-white hover:underline text-2xl ml-10"
          >
            SETTINGS
          </Link>
        )}
      </div>

      <button
        onClick={logout}
        className="bg-red-500 px-4 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </nav>
  );
}
