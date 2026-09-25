import { IWorkoutType } from "@/type/type";
import { Clock3, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IWorkoutCardProps {
  workOutData: IWorkoutType;
}

const WorkoutCard = ({ workOutData }: IWorkoutCardProps) => {
  return (
    <Link
      href={`/workouts/${workOutData.id}`}
      className="group block overflow-hidden rounded-2xl border border-zinc-800 bg-[#171a20] transition duration-300 hover:-translate-y-1 hover:border-[#ccff00] hover:bg-[#1b1f26] hover:shadow-[0_8px_25px_rgba(204,255,0,0.12)]"
    >
      {/* Image */}
      <div className="group/image relative h-52 w-full overflow-hidden">
        <Image
          src={workOutData.image}
          alt={workOutData.name}
          fill
          className="object-cover transition duration-500 group-hover/image:scale-110"
        />

        <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover/image:bg-black/20" />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category Tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          {workOutData.muscleGroups.map((muscleGroup) => (
            <span
              key={muscleGroup}
              className="inline-block cursor-default rounded-full bg-[#ccff00]/10 px-3 py-1 text-xs font-medium uppercase text-[#ccff00] transition duration-200 hover:scale-105 hover:bg-[#ccff00] hover:text-black"
            >
              {muscleGroup}
            </span>
          ))}
        </div>

        {/* Workout Name */}
        <h3 className="mb-2 cursor-default text-lg font-bold uppercase text-white transition duration-200 hover:translate-x-1 hover:text-[#ccff00]">
          {workOutData.name}
        </h3>

        {/* Equipment */}
        <p className="mb-4 cursor-default text-sm text-zinc-400 transition duration-200 hover:translate-x-1 hover:text-white">
          {workOutData.equipment}
        </p>

        {/* Stats */}
        <div className="border-t border-zinc-700 pt-4">
          <div className="grid grid-cols-3 items-center text-sm text-zinc-400">
            {/* Duration */}
            <span className="group/stat flex cursor-default items-center gap-1.5 transition duration-200 hover:-translate-y-0.5 hover:text-white">
              <Clock3
                size={16}
                className="text-[#ccff00] transition duration-200 group-hover/stat:scale-125"
              />
              <span className="transition duration-200 group-hover/stat:text-[#ccff00]">
                {workOutData.duration} min
              </span>
            </span>

            {/* Calories */}
            <span className="group/stat flex cursor-default items-center gap-1.5 transition duration-200 hover:-translate-y-0.5 hover:text-white">
              <Flame
                size={16}
                className="text-[#ccff00] transition duration-200 group-hover/stat:scale-125"
              />
              <span className="transition duration-200 group-hover/stat:text-[#ccff00]">
                {workOutData.caloriesBurned} kcal
              </span>
            </span>

            {/* Rating */}
            <span className="group/stat flex cursor-default items-center gap-1.5 transition duration-200 hover:-translate-y-0.5 hover:text-white">
              <Star
                size={16}
                className="fill-[#ccff00] text-[#ccff00] transition duration-200 group-hover/stat:scale-125"
              />
              <span className="transition duration-200 group-hover/stat:text-[#ccff00]">
                {workOutData.rating}
              </span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
