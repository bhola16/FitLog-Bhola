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
              pathname === "/my-plan"
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
            className="group flex items-center gap-2 font-medium text-white transition"
          >
            <span className="hidden transition group-hover:text-[#ccff00] sm:inline">
              Plan
            </span>

            <span className="rounded-full bg-[#ccff00] px-3 py-1 text-sm font-bold text-black transition group-hover:bg-[#d4ff33] group-hover:shadow-[0_0_10px_#ccff00]">
              {hydrated ? plan.length : 0}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="group flex items-center gap-2 font-medium text-white transition"
          >
            <span className="hidden transition group-hover:text-[#ccff00] sm:inline">
              Saved
            </span>

            <span className="rounded-full border border-white px-3 py-1 text-sm font-bold text-white transition group-hover:border-[#ccff00] group-hover:bg-[#ccff00]/10 group-hover:text-[#ccff00]">
              {hydrated ? saved.length : 0}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
