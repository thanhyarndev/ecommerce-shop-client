export const useResetPassword = () => {
    const resetPassword = async ({ email, otp, password }: {
      email: string;
      otp: string;
      password: string;
    }) => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/reset-password`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, otp, password }),
        });
  
        if (!res.ok) {
          const errorBody = await res.json();
          throw new Error(errorBody.message || "Reset failed");
        }
  
        return { success: true };
      } catch (error: any) {
        return { success: false, message: error.message };
      }
    };
  
    return { resetPassword };
  };
  