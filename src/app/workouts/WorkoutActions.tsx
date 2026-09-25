"use client";

import { IWorkoutType } from "@/type/type";
import { Bookmark, Plus } from "lucide-react";
import { useFitLog } from "../contex/FitLogContex";

interface WorkoutActionsProps {
  workout: IWorkoutType;
}

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
  const { addToPlan, saveForLater, plan } = useFitLog();

  const isPlanFull = plan.length >= 5;

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      {/* Add to Plan */}
      <button
        onClick={() => addToPlan(workout)}
        disabled={isPlanFull}
        className={`group flex items-center justify-center gap-2 rounded-xl border px-6 py-3 text-sm font-bold transition duration-300 ${
          isPlanFull
            ? "cursor-not-allowed border-zinc-700 bg-zinc-800 text-zinc-500"
            : "border-transparent bg-[#ccff00] text-black hover:-translate-y-1 hover:scale-105 hover:border-white hover:bg-[#d4ff33] hover:shadow-[0_8px_20px_rgba(204,255,0,0.25)] active:translate-y-0 active:scale-100"
        }`}
      >
        <Plus
          size={18}
          className={`transition duration-300 ${
            !isPlanFull ? "group-hover:rotate-90 group-hover:scale-110" : ""
          }`}
        />

        <span className="transition duration-200">
          Add to today&apos;s plan
        </span>
      </button>

      {/* Save for Later */}
      <button
        onClick={() => saveForLater(workout)}
        className="group flex items-center justify-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 text-sm font-bold text-[#9CA3AF] transition duration-300 hover:-translate-y-1 hover:border-[#ccff00] hover:bg-[#ccff00]/10 hover:text-[#ccff00] hover:shadow-[0_8px_20px_rgba(204,255,0,0.08)] active:translate-y-0"
      >
        <Bookmark
          size={17}
          className="transition duration-300 group-hover:scale-110 group-hover:-rotate-6"
        />

        <span className="transition duration-200 group-hover:translate-x-0.5">
          Save for later
        </span>
      </button>
    </div>
  );
};

export default WorkoutActions;
