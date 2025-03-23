"use client";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import Link from "next/link";

export default function RegisterPage() {
  const { register } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"admin" | "user">("user"); // 👈 Padrão é "user"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    register(username, email, password, role);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="p-8 bg-gray-800 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6">Registro</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome de Usuário"
            className="w-full p-2 mb-4 bg-gray-700 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
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
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as "admin" | "user")}
            className="w-full p-2 mb-4 bg-gray-700 rounded"
          >
            <option value="user">Usuário</option>
            <option value="admin">Administrador</option>
          </select>
          <button className="w-full p-2 bg-green-600 hover:bg-green-700 rounded">
            Registrar
          </button>
        </form>
        <p className="text-center mt-4">
          Já tem uma conta?{" "}
          <Link href="/login" className="text-blue-400 hover:underline">
            Faça login
          </Link>
        </p>
      </div>
    </div>
  );
}
