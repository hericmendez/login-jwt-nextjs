/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { useRouter } from "next/navigation";

interface User {
  username: string;
  email: string;
  token: string;
}

interface AuthContextProps {
  user: User | null;
  login: (identifier: string, password: string) => void;
  register: (username: string, email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = (identifier: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    // Permitir login tanto com email quanto com username
    const existingUser = users.find(
      (user: any) => (user.email === identifier || user.username === identifier) && user.password === password
    );

    if (existingUser) {
      const token = btoa(`${existingUser.email}:${password}`);
      const loggedUser = { username: existingUser.username, email: existingUser.email, token };
      localStorage.setItem("user", JSON.stringify(loggedUser));
      setUser(loggedUser);
      router.push("/");
    } else {
      alert("Credenciais inválidas");
    }
  };

  const register = (username: string, email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Verifica se já existe um usuário com o mesmo email ou username
    if (users.some((user: any) => user.email === email || user.username === username)) {
      alert("Usuário ou e-mail já registrado");
      return;
    }

    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registro bem-sucedido! Agora você pode fazer login.");
    router.push("/login");
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/login");
  };

  return <AuthContext.Provider value={{ user, login, register, logout }}>{children}</AuthContext.Provider>;
};

// Hook para facilitar o uso do contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};

export default AuthContext;
