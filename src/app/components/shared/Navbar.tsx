"use client";

import { useFitLog } from "@/app/contex/FitLogContex";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();

  const { plan, saved, hydrated } = useFitLog();

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="border-b border-zinc-100/50 bg-[#0d0f12]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Main Navbar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center gap-2"
          >
            <Image
              src={logo}
              alt="FitLog logo"
              width={40}
              height={30}
              className="transition duration-200 hover:scale-110 hover:opacity-90"
            />

            <span className="text-xl font-bold text-white transition duration-200 hover:text-[#ccff00] hover:tracking-wide">
              FITLOG
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-3 md:flex">
            <Link
              href="/workouts"
              className={`rounded-full border border-transparent px-5 py-2 font-medium transition duration-200 hover:-translate-y-0.5 ${
                pathname === "/workouts"
                  ? "bg-[#ccff00]/20 text-[#ccff00] shadow-[0_0_12px_rgba(204,255,0,0.12)]"
                  : "text-[#9CA3AF] hover:border-white hover:bg-white/5 hover:text-white"
              }`}
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              className={`rounded-full border border-transparent px-5 py-2 font-medium transition duration-200 hover:-translate-y-0.5 ${
                pathname === "/my-plan"
                  ? "bg-[#ccff00]/20 text-[#ccff00] shadow-[0_0_12px_rgba(204,255,0,0.12)]"
                  : "text-[#9CA3AF] hover:border-white hover:bg-white/5 hover:text-white"
              }`}
            >
              My Plan
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-5">
            {/* Plan */}
            <Link
              href="/my-plan"
              className="group flex items-center gap-1.5 font-medium text-white transition duration-200 hover:-translate-y-0.5 sm:gap-2"
            >
              <span className="hidden transition duration-200 group-hover:text-[#ccff00] sm:inline">
                Plan
              </span>

              <span className="rounded-full bg-[#ccff00] px-2.5 py-1 text-xs font-bold text-black transition duration-200 group-hover:scale-110 group-hover:bg-[#d4ff33] group-hover:shadow-[0_0_12px_#ccff00] sm:px-3 sm:text-sm">
                {hydrated ? plan.length : 0}
              </span>
            </Link>

            {/* Saved */}
            <Link
              href="/my-plan"
              className="group flex items-center gap-1.5 font-medium text-white transition duration-200 hover:-translate-y-0.5 sm:gap-2"
            >
              <span className="hidden transition duration-200 group-hover:text-[#ccff00] sm:inline">
                Saved
              </span>

              <span className="rounded-full border border-white px-2.5 py-1 text-xs font-bold text-white transition duration-200 group-hover:scale-110 group-hover:border-[#ccff00] group-hover:bg-[#ccff00]/10 group-hover:text-[#ccff00] group-hover:shadow-[0_0_12px_rgba(204,255,0,0.25)] sm:px-3 sm:text-sm">
                {hydrated ? saved.length : 0}
              </span>
            </Link>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-700 text-white transition duration-200 hover:border-[#ccff00] hover:bg-[#ccff00]/10 hover:text-[#ccff00] md:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="border-t border-zinc-800 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {/* Workouts */}
              <Link
                href="/workouts"
                onClick={closeMenu}
                className={`rounded-xl px-4 py-3 font-medium transition duration-200 ${
                  pathname === "/workouts"
                    ? "bg-[#ccff00]/10 text-[#ccff00]"
                    : "text-[#9CA3AF] hover:bg-[#ccff00]/10 hover:text-[#ccff00]"
                }`}
              >
                Workouts
              </Link>

              {/* My Plan */}
              <Link
                href="/my-plan"
                onClick={closeMenu}
                className={`rounded-xl px-4 py-3 font-medium transition duration-200 ${
                  pathname === "/my-plan"
                    ? "bg-[#ccff00]/10 text-[#ccff00]"
                    : "text-[#9CA3AF] hover:bg-[#ccff00]/10 hover:text-[#ccff00]"
                }`}
              >
                My Plan
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
