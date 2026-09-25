import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      {/* 404 */}
      <h1 className="cursor-default text-7xl font-bold text-[#ccff00] transition duration-300 hover:scale-110 hover:-rotate-2 hover:text-[#d4ff33] hover:drop-shadow-[0_0_20px_rgba(204,255,0,0.25)]">
        404
      </h1>

      {/* Title */}
      <h2 className="mt-4 cursor-default text-2xl font-semibold text-white transition duration-300 hover:-translate-y-1 hover:text-[#ccff00]">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="mt-2 max-w-md cursor-default text-zinc-400 transition duration-300 hover:translate-y-0.5 hover:text-white">
        Sorry, the page you are looking for does not exist.
      </p>

      {/* Back to Home */}
      <Link
        href="/"
        className="mt-6 rounded-lg border border-transparent bg-[#ccff00] px-6 py-3 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:scale-105 hover:border-white hover:bg-[#d4ff33] hover:shadow-[0_8px_20px_rgba(204,255,0,0.25)] active:translate-y-0 active:scale-100"
      >
        Back to Home
      </Link>
    </main>
  );
};

export default NotFound;
