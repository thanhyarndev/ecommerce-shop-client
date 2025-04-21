// app/forgot-password/page.tsx
"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import OtpInput from "@/components/otp/OtpInput";
import { useForgotPassword } from "@/hooks/api/auth/useForgotPassword";
const { sendEmail, verifyOtp } = useForgotPassword();

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<"email" | "otp">("email");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
  });

  const onEmailSubmit = async (values: any) => {
    setLoading(true);
    try {
      await sendEmail(values.email);
      toast.success("OTP sent to your email");
      setEmail(values.email);
      setStep("otp");
    } catch (error) {
      toast.error("Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };
  
  const onOtpSubmit = async (otp: string) => {
    try {
      await verifyOtp(email, otp);
      toast.success("OTP verified");
      router.push(`/reset-password?email=${email}&otp=${otp}`);
    } catch (error) {
      toast.error("OTP verification failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            {step === "email" ? "Password Reset" : "Enter OTP"}
          </CardTitle>
          <CardDescription>
            {step === "email"
              ? "Enter your email to receive OTP."
              : "Enter the 6-digit OTP sent to your email."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === "email" ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onEmailSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="name@example.com" {...field} disabled={loading} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-black text-white" disabled={loading}>
                  Send OTP
                </Button>
              </form>
            </Form>
          ) : (
            <OtpInput onSubmit={onOtpSubmit} loading={loading} />
          )}
        </CardContent>
        <CardFooter className="flex justify-between text-sm text-muted-foreground">
          <Link href="/login" className="hover:underline text-blue-500">
            Login
          </Link>
          <Link href="/register" className="hover:underline text-blue-500">
            Register
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
