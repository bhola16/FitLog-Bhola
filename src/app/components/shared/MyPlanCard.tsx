"use client";

import { Check, Clock3, Flame, Star, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Bounce, toast } from "react-toastify";
import { useFitLog } from "../../contex/FitLogContex";

type Workout = {
  id: number;
  name: string;
  image: string;
  equipment: string;
  duration: number;
  caloriesBurned: number;
  rating: number;
};

type MyPlanCardProps = {
  workout: Workout;
  activeTab: "plan" | "saved";
};

const toastOptions = {
  position: "top-right" as const,
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light" as const,
  transition: Bounce,
};

const MyPlanCard = ({ workout, activeTab }: MyPlanCardProps) => {
  const { removeFromPlan, removeFromSaved } = useFitLog();

  const handleMarkAsDone = () => {
    removeFromPlan(workout.id);
    toast.success(`${workout.name} marked as done!`, toastOptions);
  };

  const handleRemove = () => {
    if (activeTab === "plan") {
      removeFromPlan(workout.id);
      toast.error(`${workout.name} removed from your plan!`, toastOptions);
      return;
    }

    removeFromSaved(workout.id);
    toast.error(
      `${workout.name} removed from saved workouts.....!`,
      toastOptions,
    );
  };

  return (
    <div className="group rounded-2xl border border-zinc-800 bg-[#171a20] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#ccff00]/60 hover:bg-[#1b1f26] hover:shadow-[0_8px_25px_rgba(204,255,0,0.08)] sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-5">
        {/* Workout Image */}
        <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl border border-transparent transition duration-300 group-hover:border-[#ccff00]/40 sm:h-40 lg:h-25 lg:w-40">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
        </div>

        {/* Workout Information */}
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-lg font-bold uppercase text-white transition duration-200 group-hover:text-[#ccff00] sm:text-xl">
            {workout.name}
          </h2>

          <p className="mt-1 truncate text-sm text-[#8A92A0] transition duration-200 group-hover:text-white">
            {workout.equipment}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#8A92A0]">
            <span className="flex items-center gap-1.5 whitespace-nowrap transition duration-200 group-hover:text-white">
              <Clock3
                size={15}
                className="text-[#ccff00] transition duration-200 group-hover:scale-110"
              />
              {workout.duration} min
            </span>

            <span className="flex items-center gap-1.5 whitespace-nowrap transition duration-200 group-hover:text-white">
              <Flame
                size={15}
                className="text-[#ccff00] transition duration-200 group-hover:scale-110"
              />
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1.5 whitespace-nowrap transition duration-200 group-hover:text-white">
              <Star
                size={15}
                className="fill-[#ccff00] text-[#ccff00] transition duration-200 group-hover:scale-110"
              />
              {workout.rating}
            </span>
          </div>
        </div>

        {/* Actions */}
        {activeTab === "saved" ? (
          <div className="grid w-full grid-cols-4 gap-2 lg:flex lg:w-auto lg:gap-3">
            <Link
              href={`/workouts/${workout.id}`}
              className="col-span-3 flex items-center justify-center rounded-xl border border-zinc-700 px-3 py-2.5 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-[#ccff00] hover:bg-[#ccff00]/10 hover:text-[#ccff00] lg:col-span-1 lg:px-5 lg:py-3"
            >
              View Details
            </Link>

            <button
              onClick={handleRemove}
              className="col-span-1 flex h-10 items-center justify-center rounded-xl border border-zinc-700 text-[#8A92A0] transition duration-200 hover:-translate-y-0.5 hover:border-red-500 hover:bg-red-500/10 hover:text-red-500 lg:h-11 lg:w-11"
              aria-label={`Remove ${workout.name}`}
            >
              <X
                size={18}
                className="transition duration-200 group-hover:scale-105"
              />
            </button>
          </div>
        ) : (
          <div className="flex w-full items-center gap-2 lg:w-auto lg:shrink-0 lg:gap-3">
            <Link
              href={`/workouts/${workout.id}`}
              className="flex flex-1 items-center justify-center rounded-xl border border-zinc-700 px-3 py-2.5 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-[#ccff00] hover:bg-[#ccff00]/10 hover:text-[#ccff00] lg:flex-none lg:px-5 lg:py-3"
            >
              View Details
            </Link>

            <button
              onClick={handleMarkAsDone}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-[#ccff00] px-3 py-2.5 text-sm font-bold text-black transition duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-[#d4ff33] hover:shadow-[0_5px_15px_rgba(204,255,0,0.2)] lg:flex-none lg:px-5 lg:py-3"
            >
              <Check size={17} />
              <span>Mark as Done</span>
            </button>

            <button
              onClick={handleRemove}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-700 text-[#8A92A0] transition duration-200 hover:-translate-y-0.5 hover:border-red-500 hover:bg-red-500/10 hover:text-red-500 lg:h-11 lg:w-11"
              aria-label={`Remove ${workout.name}`}
            >
              <X size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPlanCard;
