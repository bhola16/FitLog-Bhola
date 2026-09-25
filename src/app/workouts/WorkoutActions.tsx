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
      <button
        onClick={() => addToPlan(workout)}
        disabled={isPlanFull}
        className={`flex items-center justify-center gap-2 rounded-xl border px-6 py-3 text-sm font-bold transition duration-200 ${
          isPlanFull
            ? "cursor-not-allowed border-zinc-700 bg-zinc-800 text-zinc-500"
            : "border-transparent bg-[#ccff00] text-black hover:scale-105 hover:border-white hover:bg-[#d4ff33] hover:shadow-lg"
        }`}
      >
        <Plus size={18} />
        Add to today&apos;s plan
      </button>

      <button
        onClick={() => saveForLater(workout)}
        className="flex items-center justify-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 text-sm font-bold text-[#9CA3AF] transition hover:border-[#ccff00] hover:text-[#ccff00]"
      >
        <Bookmark size={17} />
        Save for later
      </button>
    </div>
  );
};

export default WorkoutActions;
