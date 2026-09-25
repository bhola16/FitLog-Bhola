import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-zinc-100/50 bg-[#0d0f12]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row sm:px-10">
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

        {/* Copyright */}
        <p className="text-center text-sm text-[#9CA3AF] sm:text-right">
          &copy; 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
