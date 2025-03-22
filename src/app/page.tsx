"use client";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
  const { user } = useAuth();

  return (
    <main className="flex flex-col items-start justify-start h-screen ms-5 mt-5">
      {user ? (
        <h1 className="text-2xl font-bold">Bem-vindo, {user.username}!</h1>
      ) : (
        <h1 className="text-2xl font-bold">
          Bem-vindo! Faça login para continuar.
        </h1>
      )}
    </main>
  );
}
