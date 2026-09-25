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
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="FitLog logo" width={40} height={30} />

          <span className="text-xl font-bold text-white">FITLOG</span>
        </Link>

        <nav className="hidden items-center gap-3 md:flex">
          <Link
            href="/workouts"
            className={`rounded-full px-5 py-2 font-medium transition ${
              pathname === "/workouts"
                ? "bg-[#ccff00]/20 text-[#ccff00]"
                : "text-[#9CA3AF] hover:bg-[#ccff00]/5 hover:text-[#ccff00]"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-5 py-2 font-medium transition ${
              pathname === "/myplan"
                ? "bg-[#ccff00]/20 text-[#ccff00]"
                : "text-[#9CA3AF] hover:bg-[#ccff00]/5 hover:text-[#ccff00]"
            }`}
          >
            My Plan
          </Link>
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 font-medium text-white"
          >
            <span className="hidden sm:inline">Plan</span>

            <span className="rounded-full bg-[#ccff00] px-3 py-1 text-sm font-bold text-black">
              {hydrated ? plan.length : 0}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 font-medium text-white"
          >
            <span className="hidden sm:inline">Saved</span>

            <span className="rounded-full border border-white px-3 py-1 text-sm font-bold text-white">
              {hydrated ? saved.length : 0}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
