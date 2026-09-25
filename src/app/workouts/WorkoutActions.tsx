"use client";

import { IWorkoutType } from "@/type/type";
import { Bookmark, Plus } from "lucide-react";
import { useFitLog } from "../contex/FitLogContex";

interface WorkoutActionsProps {
  workout: IWorkoutType;
}

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
  const { addToPlan, saveForLater } = useFitLog();

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <button
        onClick={() => addToPlan(workout)}
        className="flex items-center justify-center gap-2 rounded-xl border border-transparent bg-[#ccff00] px-6 py-3 text-sm font-bold text-black transition duration-200 hover:scale-105 hover:border-white hover:bg-[#d4ff33] hover:shadow-lg"
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
