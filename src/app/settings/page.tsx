"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useRole } from "@/hooks/useRole";

const SettingsPage = () => {
  const router = useRouter();
  const isAdmin = useRole("admin");

  useEffect(() => {
    if (!isAdmin) {
      router.push("/");
    }
  }, [isAdmin, router]); // 🚀 Redirecionamento só ocorre após a renderização inicial

  if (!isAdmin) return null; // Evita renderizar conteúdo enquanto redireciona

  return (
    <div  className="flex flex-col items-start justify-start h-screen ms-5 mt-5">
      <h1 className="text-2xl font-bold">Configurações</h1>
      <p>Apenas administradores podem ver esta página.</p>
    </div>
  );
};

export default SettingsPage;
