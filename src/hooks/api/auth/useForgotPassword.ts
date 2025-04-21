export const useForgotPassword = () => {
    const sendEmail = async (email: string) => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
  
      if (!res.ok) throw new Error("Failed to send OTP");
      return true;
    };
  
    const verifyOtp = async (email: string, otp: string) => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
  
      if (!res.ok) throw new Error("Invalid or expired OTP");
      return true;
    };
  
    return { sendEmail, verifyOtp };
  };