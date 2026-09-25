import banner from "@/assets/banner.png";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="mx-4 sm:mx-6 lg:mx-10">
      <section className="container mx-auto my-10 rounded-2xl border border-zinc-700 bg-[#222630] px-5 py-10 sm:my-14 sm:px-8 sm:py-12 md:my-16 md:px-10 md:py-14 lg:my-20 lg:px-12 lg:py-15">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-8 lg:gap-12">
          {/* Banner Content */}
          <div className="w-full max-w-xl text-center text-white md:text-left">
            <h2 className="text-base font-semibold uppercase text-[#C2F800] sm:text-lg">
              Workout Library
            </h2>

            <h1 className="my-4 text-3xl font-bold uppercase leading-tight sm:text-4xl md:text-4xl lg:text-5xl">
              Train with intent. Log
              <br className="hidden sm:block" /> every set.
            </h1>

            <p className="mx-auto max-w-[450px] text-sm leading-6 text-[#9CA3AF] sm:text-base md:mx-0">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            {/* Browse Workouts Button */}
            <Link
              href="/workouts"
              className="mt-8 inline-block rounded-xl border border-transparent bg-[#C2F800] px-6 py-3 text-sm font-bold uppercase text-black transition duration-200 hover:-translate-y-1 hover:border-white hover:bg-[#d4ff33] hover:shadow-[0_8px_20px_rgba(194,248,0,0.25)] sm:mt-10 sm:px-8 sm:py-4"
            >
              Browse Workouts
            </Link>
          </div>

          {/* Banner Image */}
          <div className="shrink-0">
            <Image
              src={banner}
              alt="Workout training"
              width={334}
              height={334}
              className="h-auto w-[190px] sm:w-[240px] md:w-[280px] lg:w-[334px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
