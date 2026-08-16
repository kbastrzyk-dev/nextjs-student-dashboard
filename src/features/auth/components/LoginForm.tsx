"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "../schemas";
import { useRouter } from "next/navigation";

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

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-md px-3 py-2"
          placeholder="you@example.com"
        />
        {errors.email && (
          <span
            id="email-error"
            className="text-red-500 text-sm mt-1"
            role="alert"
          >
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1 mb-4">
        <label htmlFor="password" className="text-sm font-medium text-gray-300">
          Password
        </label>
        <input
          id="password"
          type="password"
          {...register("password")}
          aria-invalid={errors.password ? "true" : "false"}
          aria-describedby={errors.password ? "password-error" : undefined}
          className="bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-md px-3 py-2"
          placeholder="••••••••"
        />
        {errors.password && (
          <span
            id="password-error"
            className="text-red-500 text-sm mt-1"
            role="alert"
          >
            {errors.password.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Logging in..." : "Log in"}
      </button>
    </form>
  );
};
