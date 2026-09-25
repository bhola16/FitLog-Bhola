import banner from "@/assets/banner.png";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="mx-4 sm:mx-6 lg:mx-10">
      <section className="container mx-auto my-20 py-15 rounded-2xl border border-zinc-700 bg-[#222630] sm:px-10">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          {/* Banner Content */}
          <div className="max-w-xl text-white">
            <h2 className="mt-2 text-lg font-semibold uppercase text-[#C2F800]">
              Workout Library
            </h2>

            <h1 className="my-4 max-w-[500px] text-4xl font-bold uppercase leading-tight">
              Train with intent. Log
              <br className="hidden sm:block" /> every set.
            </h1>

            <p className="max-w-[450px] text-sm leading-6 text-[#9CA3AF] sm:text-base">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            {/* Browse Workouts Button */}
            <Link
              href="/workouts"
              className="mt-15 inline-block rounded-xl bg-[#C2F800] px-8 py-4 text-sm font-bold uppercase text-black transition hover:bg-[#d4ff33]"
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
              className="h-auto w-[240px] sm:w-[300px] md:w-[334px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
