"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        router.push("/signin");
      } else {
        setUser(data.user);
      }
      setLoading(false);
    };
    getUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/signin");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[var(--background)] text-[var(--foreground)]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="w-8 h-8 border-4 border-teal-600 border-t-transparent rounded-full"
        ></motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col items-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-white/90 dark:bg-teal-950/70 backdrop-blur-xl shadow-2xl rounded-2xl p-8 border border-[var(--color-border)]"
      >
        <h1 className="text-3xl font-bold text-teal-900 dark:text-white mb-4">
          Welcome, {user?.email?.split("@")[0]} 👋
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          You’re now signed in to your{" "}
          <span className="font-semibold text-yellow-600">Ezyride</span> dashboard.
        </p>

        <div className="space-y-4">
          <div className="p-4 bg-white/60 dark:bg-teal-900/50 rounded-xl border border-[var(--color-border)]">
            <h2 className="text-lg font-semibold text-teal-800 dark:text-yellow-300">
              Account Info
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              <strong>Email:</strong> {user?.email}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              <strong>User ID:</strong> {user?.id}
            </p>
          </div>

          <div className="flex justify-end">
            <Button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
            >
              Log Out
            </Button>
          </div>
        </div>
      </motion.div>

      <footer className="mt-8 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Ezyride. All rights reserved.
      </footer>
    </div>
  );
}
