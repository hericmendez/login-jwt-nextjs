import { useAuth } from "@/context/AuthContext";

export const useRole  = (requiredRole: "admin" | "user") => {
  const { user } = useAuth();
  console.log("useRole user ==> ", user);
  return user?.role === requiredRole;
};
