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
          <div className="col-span-full py-12 text-center text-zinc-400">
            No workouts found.
          </div>
        )}
      </div>
    </>
  );
};

export default WorkoutLibraryClient;
