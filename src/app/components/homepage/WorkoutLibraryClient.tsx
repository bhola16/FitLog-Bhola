"use client";

import { IWorkoutType } from "@/type/type";
import { X } from "lucide-react";
import { useState } from "react";
import WorkoutCard from "../shared/WorkOutCard";

interface WorkoutLibraryClientProps {
  workouts: IWorkoutType[];
}

const WorkoutLibraryClient = ({ workouts }: WorkoutLibraryClientProps) => {
  const [search, setSearch] = useState("");

  const filteredWorkouts = workouts.filter((workout) => {
    const searchText = search.toLowerCase();

    return (
      workout.name.toLowerCase().includes(searchText) ||
      workout.muscleGroups.some((muscleGroup) =>
        muscleGroup.toLowerCase().includes(searchText),
      )
    );
  });

  return (
    <>
      <div className="mb-8 flex justify-end">
        <div className="relative w-full sm:max-w-md">
          <input
            type="text"
            placeholder="Search workouts by name or muscle group..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-[#0d0f12] px-4 py-3 pr-12 text-white outline-none transition duration-200 placeholder:text-zinc-500 hover:border-zinc-500 focus:border-[#ccff00] focus:ring-2 focus:ring-[#ccff00]/10"
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-700 bg-[#171a20] text-zinc-400 transition duration-200 hover:scale-110 hover:border-[#ccff00] hover:bg-[#ccff00]/10 hover:text-[#ccff00]"
              aria-label="Clear search"
            >
              <X size={18} strokeWidth={2.5} />
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredWorkouts.length > 0 ? (
          filteredWorkouts.map((workOutData) => (
            <WorkoutCard key={workOutData.id} workOutData={workOutData} />
          ))
        ) : (
          <div className="col-span-full flex min-h-[280px] items-center justify-center">
            <div className="group w-full max-w-xl rounded-2xl border border-zinc-800 bg-[#171a20] px-6 py-12 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#C2F800]/40 hover:shadow-[0_12px_35px_rgba(194,248,0,0.08)]">
              {/* Icon */}
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-zinc-700 bg-[#0d0f12] transition-all duration-300 group-hover:scale-110 group-hover:border-[#C2F800]/50 group-hover:bg-[#C2F800]/10">
                <X
                  size={28}
                  strokeWidth={2}
                  className="text-zinc-500 transition-all duration-300 group-hover:rotate-90 group-hover:text-[#C2F800]"
                />
              </div>

              {/* Title */}
              <h3 className="mb-2 text-xl font-bold uppercase text-white transition-colors duration-300 group-hover:text-[#C2F800]">
                No Workouts Found
              </h3>

              {/* Message */}
              <p className="mx-auto max-w-md text-sm leading-6 text-zinc-500">
                No workouts match your search
                {search && (
                  <>
                    {" "}
                    for{" "}
                    <span className="font-semibold text-zinc-300">
                      &quot;{search}&quot;
                    </span>
                  </>
                )}
                .
              </p>

              {/* Clear Search Button */}
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="mt-6 inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-[#0d0f12] px-5 py-2.5 text-sm font-semibold uppercase text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-[#C2F800] hover:bg-[#C2F800] hover:text-black hover:shadow-[0_6px_20px_rgba(194,248,0,0.2)] active:translate-y-0"
                >
                  <X size={16} />
                  Clear Search
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WorkoutLibraryClient;
