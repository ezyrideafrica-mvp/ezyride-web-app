"use client";

import { SupabaseProvider, useSupabase } from "@/app/providers/supabase-provider";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState, type ReactNode } from "react";
import { Home, LogOut, Car, Settings } from "lucide-react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <SupabaseProvider>
      <DashboardContent>{children}</DashboardContent>
    </SupabaseProvider>
  );
}

function DashboardContent({ children }: { children: ReactNode }) {
  const { supabase } = useSupabase();
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        router.push("/signin");
      } else {
        setUser(user);
      }
    };
    getUser();
  }, [router, supabase]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/signin");
  };

  return (
    <div className="flex min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* SIDEBAR */}
      <motion.aside
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex flex-col justify-between w-64 p-6 bg-white/60 dark:bg-teal-950/60 backdrop-blur-xl border-r border-[var(--color-border)]"
      >
        <div>
          <Link
            href="/dashboard"
            className="text-2xl font-extrabold text-teal-700 dark:text-yellow-300 tracking-tight"
          >
            Ezyride
          </Link>

          <nav className="mt-8 space-y-2">
            <NavLink href="/dashboard" icon={<Home size={18} />} label="Home" />
            <NavLink href="/rides" icon={<Car size={18} />} label="My Rides" />
            <NavLink href="/settings" icon={<Settings size={18} />} label="Settings" />
          </nav>
        </div>

        <div className="border-t border-[var(--color-border)] pt-4">
          <p className="text-xs text-gray-500 mb-3">
            {user?.email ? user.email : "Loading..."}
          </p>
          <Button
            variant="destructive"
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 w-full"
          >
            <LogOut size={16} />
            Log Out
          </Button>
        </div>
      </motion.aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col">
        {/* TOP NAV */}
        <header className="md:hidden flex justify-between items-center p-4 bg-white/70 dark:bg-teal-950/50 border-b border-[var(--color-border)] backdrop-blur-md">
          <h1 className="font-bold text-teal-700 dark:text-yellow-300 text-lg">
            Ezyride
          </h1>
          <Button onClick={handleLogout} variant="ghost" size="sm">
            <LogOut size={18} className="text-red-600" />
          </Button>
        </header>

        <main className="flex-1 p-6">{children}</main>

        <footer className="text-center text-xs py-4 text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Ezyride. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

type NavLinkProps = {
  href: string;
  icon: ReactNode;
  label: string;
};

function NavLink({ href, icon, label }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
        isActive
          ? "bg-teal-600 text-white"
          : "hover:bg-teal-100/60 dark:hover:bg-teal-900/50 text-gray-700 dark:text-gray-200"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}
