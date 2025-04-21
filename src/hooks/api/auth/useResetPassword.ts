import { useState } from "react";

export const useResetPassword = () => {
  const [loading, setLoading] = useState(false);

  const resetPassword = async (otp: string, password: string) => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Reset failed");
      }

      return { success: true };
    } catch (error) {
      return { success: false, message: (error as Error).message };
    } finally {
      setLoading(false);
    }
  };

  return { resetPassword, loading };
};
