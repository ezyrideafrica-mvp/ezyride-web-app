"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { createClient } from "@supabase/supabase-js";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setMessage("❌ " + error.message);
    } else {
      setMessage("✅ Logged in successfully!");
      router.push("/dashboard"); // redirect to dashboard
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)] text-[var(--foreground)]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/90 dark:bg-teal-950/70 backdrop-blur-xl shadow-2xl rounded-2xl p-8 w-[90%] max-w-md border border-[var(--color-border)]"
      >
        <h1 className="text-3xl font-bold mb-2 text-teal-900 dark:text-white">
          Welcome Back 👋
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-6">
          Sign in to your <span className="font-semibold text-yellow-600">EzyRide</span> account.
        </p>

        <form onSubmit={handleSignin} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full bg-white/70 dark:bg-teal-900/50 text-gray-900 dark:text-white border border-[var(--color-border)] rounded-lg"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-200">Password</label>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full bg-white/70 dark:bg-teal-900/50 text-gray-900 dark:text-white border border-[var(--color-border)] rounded-lg"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-teal-800 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>

          {message && (
            <p className="text-center text-sm mt-3 text-yellow-700 dark:text-yellow-300">{message}</p>
          )}
        </form>

        <div className="mt-6 text-center text-gray-600 dark:text-gray-400 text-sm">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-yellow-600 dark:text-yellow-400 hover:underline">
            Sign Up
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
