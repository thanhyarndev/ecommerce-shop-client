import { useState } from "react";

export const useLogin = (p0: {
  onSuccess: (token: string, user: any) => void;
  onError: (error: any) => void;
}) => {
  const [loading, setLoading] = useState(false);

  const login = async (data: { email: string; password: string }) => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "Login failed");
      }

      const response = await res.json();
      p0.onSuccess(response.token, response.user);
      return { success: true };
    } catch (error) {
      p0.onError(error);
      return { success: false, message: (error as Error).message };
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};