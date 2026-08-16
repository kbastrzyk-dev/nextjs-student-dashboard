import { LoginForm } from "@/features/auth/components/LoginForm";

export default function Home() {
  return (
    // Tailwind classes center the form on the page and give it a dark background.
    <main className="min-h-screen bg-[#121212] flex items-center justify-center p-4">
      <LoginForm />
    </main>
  );
}
