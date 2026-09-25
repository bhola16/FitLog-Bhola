"use client";

import { useFitLog } from "@/app/contex/FitLogContex";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const { plan, saved, hydrated } = useFitLog();

  return (
    <header className="border-b border-zinc-100/50 bg-[#0d0f12]">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
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

        {/* Navigation */}
        <nav className="hidden items-center gap-3 md:flex">
          <Link
            href="/workouts"
            className={`rounded-full px-5 py-2 font-medium transition duration-200 hover:-translate-y-0.5 ${
              pathname === "/workouts"
                ? "bg-[#ccff00]/20 text-[#ccff00] shadow-[0_0_12px_rgba(204,255,0,0.12)]"
                : "text-[#9CA3AF] hover:bg-[#ccff00]/10 hover:text-[#ccff00] hover:shadow-[0_0_12px_rgba(204,255,0,0.08)]"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-5 py-2 font-medium transition duration-200 hover:-translate-y-0.5 ${
              pathname === "/my-plan"
                ? "bg-[#ccff00]/20 text-[#ccff00] shadow-[0_0_12px_rgba(204,255,0,0.12)]"
                : "text-[#9CA3AF] hover:bg-[#ccff00]/10 hover:text-[#ccff00] hover:shadow-[0_0_12px_rgba(204,255,0,0.08)]"
            }`}
          >
            My Plan
          </Link>
        </nav>

        {/* Plan & Saved */}
        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            href="/my-plan"
            className="group flex items-center gap-2 font-medium text-white transition duration-200 hover:-translate-y-0.5"
          >
            <span className="hidden transition duration-200 group-hover:text-[#ccff00] sm:inline">
              Plan
            </span>

            <span className="rounded-full bg-[#ccff00] px-3 py-1 text-sm font-bold text-black transition duration-200 group-hover:scale-110 group-hover:bg-[#d4ff33] group-hover:shadow-[0_0_12px_#ccff00]">
              {hydrated ? plan.length : 0}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="group flex items-center gap-2 font-medium text-white transition duration-200 hover:-translate-y-0.5"
          >
            <span className="hidden transition duration-200 group-hover:text-[#ccff00] sm:inline">
              Saved
            </span>

            <span className="rounded-full border border-white px-3 py-1 text-sm font-bold text-white transition duration-200 group-hover:scale-110 group-hover:border-[#ccff00] group-hover:bg-[#ccff00]/10 group-hover:text-[#ccff00] group-hover:shadow-[0_0_12px_rgba(204,255,0,0.25)]">
              {hydrated ? saved.length : 0}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
