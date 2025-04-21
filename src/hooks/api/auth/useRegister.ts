import { useState } from "react";

export const useRegister = (p0: { onSuccess: () => void; onError: (error: any) => void; }) => {
  const [loading, setLoading] = useState(false);

  const register = async (data: any) => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Registration failed");

      return { success: true };
    } catch (error) {
      return { success: false, message: (error as Error).message };
    } finally {
      setLoading(false);
    }
  };

  return { register, loading };
};