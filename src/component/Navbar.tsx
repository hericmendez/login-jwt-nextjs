
"use client";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();

  if (!user) return null; // Oculta a Navbar se não estiver logado

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <h1 className="text-lg font-bold">Teste de Login</h1>
      <button onClick={logout} className="bg-red-500 px-4 rounded hover:bg-red-600">
        Logout
      </button>
    </nav>
  );
}
