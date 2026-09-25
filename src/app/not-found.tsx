import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-7xl font-bold text-[#ccff00]">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-white">Page Not Found</h2>

      <p className="mt-2 max-w-md text-zinc-400">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-[#ccff00] px-6 py-3 font-semibold text-black transition hover:bg-[#d4ff33]"
      >
        Back to Home
      </Link>
    </main>
  );
};

export default NotFound;
