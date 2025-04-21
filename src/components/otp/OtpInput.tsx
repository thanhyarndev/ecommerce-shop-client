"use client";

import React, { useEffect, useRef, useState } from "react";

interface OtpInputProps {
  onSubmit: (otp: string) => Promise<void>;
  loading?: boolean;
}

export default function OtpInput({ onSubmit, loading = false }: OtpInputProps) {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length !== 6) return;
    await onSubmit(code);
  };

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex justify-center gap-2">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={(el) => {
              inputsRef.current[index] = el;
            }}
            className="w-12 h-12 text-center text-lg border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          />
        ))}
      </div>
      <div className="text-center pt-4">
        <button
          type="submit"
          disabled={loading || otp.join("").length !== 6}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          Verify OTP
        </button>
      </div>
    </form>
  );
}