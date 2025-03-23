"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function Home() {
  const { user } = useAuth();
  console.log("user ==> ", user);

  return (
    <main className="flex flex-col items-start justify-start h-screen ms-5 mt-5">
      {user ? (
        <h1 className="text-2xl font-bold">
          {" "}
          Bem-vindo, {user.username}! <br />
          Seu nível de acesso é:
          {user.role === "admin" ? " Administrador" : " Usuário"}
        </h1>
      ) : (
        <h1 className="text-2xl font-bold">
          Bem-vindo!{" "}
          <Link href="/login" className="text-blue-400 hover:underline">
            Faça login
          </Link>{" "}
          para continuar.
        </h1>
      )}
    </main>
  );
}
