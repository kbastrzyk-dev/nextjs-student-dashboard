"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { loginSchema, type LoginFormData } from "../schemas";
import { InputField } from "@/components/ui/InputField";
import { Button } from "@/components/ui/Button";

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);

    try {
      // Simulate network request delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Login successful. Payload:", data);
      router.push("/dashboard");
    } catch (error) {
      console.error("Authentication failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full max-w-md p-8 bg-gray-900 rounded-xl border border-gray-800 shadow-xl"
    >
      <h2 className="text-2xl font-bold text-white mb-4">Log in to MPCircle</h2>

      {/* Reusable InputField */}
      <InputField
        label="Email"
        type="email"
        placeholder="you@example.com"
        registration={register("email")}
        error={errors.email}
      />

      <InputField
        label="Password"
        type="password"
        placeholder="••••••••"
        registration={register("password")}
        error={errors.password}
      />

      {/* Reusable Button */}
      <Button type="submit" isLoading={isLoading} fullWidth className="mt-2">
        Log in
      </Button>
    </form>
  );
};
