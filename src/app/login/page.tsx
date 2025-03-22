"use client";
import { useState } from "react";
import { useAuth

 } from "@/hooks/useAuth";
import Link from "next/link";
export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
    console.log("email, password ==> ", email, password);

  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="p-8 bg-gray-800 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            className="w-full p-2 mb-4 bg-gray-700 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            className="w-full p-2 mb-4 bg-gray-700 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded">Entrar</button>
        </form>
        <p className="text-center mt-4">
  Não tem uma conta? <Link href="/register" className="text-blue-400 hover:underline">Cadastre-se</Link>
</p>
      </div>
    </div>
  );
}
