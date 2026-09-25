"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useFitLog } from "../contex/FitLogContex";

type SortOption = "duration" | "calories" | "rating";

const MyPlanPage = () => {
  const { plan, saved } = useFitLog();

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  // Separate sorting state for each tab
  const [planSortBy, setPlanSortBy] = useState<SortOption>("duration");

  const [savedSortBy, setSavedSortBy] = useState<SortOption>("duration");

  // Get current tab list
  const currentList = activeTab === "plan" ? plan : saved;

  // Get current tab's sorting option
  const sortBy = activeTab === "plan" ? planSortBy : savedSortBy;

  // Calculate total minutes
  const totalMinutes = currentList.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  // Calculate total calories
  const totalCalories = currentList.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  // Sort current list
  const sortedList = [...currentList].sort((a, b) => {
    switch (sortBy) {
      case "duration":
        return a.duration - b.duration;

      case "calories":
        return a.caloriesBurned - b.caloriesBurned;

      case "rating":
        return a.rating - b.rating;

      default:
        return 0;
    }
  });

  // Handle sorting
  const handleSortChange = (value: SortOption) => {
    if (activeTab === "plan") {
      setPlanSortBy(value);
    } else {
      setSavedSortBy(value);
    }
  };

  return (
    <main className="mx-4 my-10 sm:mx-6 lg:mx-10">
      <div className="container mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold uppercase text-white">My Plan</h1>

          <p className="mt-2 text-[#8A92A0]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics Summary */}
        <div className="mb-8 rounded-2xl border border-zinc-800 bg-[#171a20]">
          <div className="grid grid-cols-3 divide-x divide-zinc-800">
            {/* Exercises */}
            <div className="p-4 text-center sm:p-5">
              <p className="text-xs uppercase text-[#8A92A0] sm:text-sm">
                Exercises
              </p>

              <p className="mt-2 text-3xl  font-bold text-[#CCFF00] sm:text-4xl">
                {currentList.length}
              </p>
            </div>

            {/* Minutes */}
            <div className="p-4 text-center sm:p-5">
              <p className="text-xs uppercase text-[#8A92A0] sm:text-sm">
                Minutes
              </p>

              <p className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                {totalMinutes}
              </p>
            </div>

            {/* Calories */}
            <div className="p-4 text-center sm:p-5">
              <p className="text-xs uppercase text-[#8A92A0] sm:text-sm">
                Calories
              </p>

              <p className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                {totalCalories}
              </p>
            </div>
          </div>
        </div>

        {/* Tabs + Sort */}
        <div className="mb-8 flex flex-col gap-4 rounded-2xl p-2 sm:flex-row sm:items-center sm:justify-between">
          {/* Tabs */}
          <div className="flex gap-4 rounded-2xl border border-[#8A92A0]/30 px-4 py-2">
            <button
              onClick={() => setActiveTab("plan")}
              className={`rounded-2xl border px-8 py-2 text-sm font-bold uppercase transition ${
                activeTab === "plan"
                  ? "border-[#ccff00] text-[#ccff00]"
                  : "border-zinc-700 text-[#8A92A0] hover:border-zinc-500 hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`rounded-2xl border px-8 py-2 text-sm font-bold uppercase transition ${
                activeTab === "saved"
                  ? "border-[#ccff00] text-[#ccff00]"
                  : "border-zinc-700 text-[#8A92A0] hover:border-zinc-500 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-3">
            <label
              htmlFor="sort"
              className="text-sm font-medium text-[#8A92A0]"
            >
              Sort By
            </label>

            <div className="relative">
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value as SortOption)}
                className="appearance-none rounded-xl border border-zinc-700 bg-[#171a20] py-3 pl-4 pr-10 text-sm font-medium text-white outline-none transition focus:border-[#ccff00]"
              >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
              </select>

              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#8A92A0]"
              />
            </div>
          </div>
        </div>

        {/* Empty State */}
        {sortedList.length === 0 ? (
          <div className="rounded-2xl border border-zinc-800 bg-[#111317] px-6 py-20 text-center">
            <h2 className="text-3xl font-bold uppercase text-white">
              Nothing Here Yet
            </h2>

            <p className="mt-3 text-[#A1A1A1]">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/workouts"
              className="mt-8 inline-block rounded-4xl border border-transparent bg-[#ccff00] px-6 py-3 text-sm font-bold text-black transition duration-200 hover:border-white hover:bg-[#d4ff33]"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          /* Workout Cards */
          <div className="grid grid-cols-1 gap-5">
            <h2>Here is the plan card..</h2>
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlanPage;
