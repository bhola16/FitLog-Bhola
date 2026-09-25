import { IWorkoutType } from "@/type/type";
import Image from "next/image";
import { notFound } from "next/navigation";
import WorkoutActions from "../WorkoutActions";

interface IWorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getWorkout = async (id: string): Promise<IWorkoutType> => {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

  if (!res.ok) {
    notFound();
  }

  return res.json();
};

const WorkoutDetailsPage = async ({ params }: IWorkoutDetailsPageProps) => {
  const { id } = await params;

  const workout = await getWorkout(id);

  return (
    <main className="mx-4 my-8 sm:mx-6 sm:my-10 lg:mx-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left Side - Image */}
          <div className="group relative min-h-[350px] overflow-hidden rounded-2xl border border-zinc-800 bg-[#171a20] transition duration-300 hover:-translate-y-1 hover:border-[#ccff00] hover:shadow-[0_10px_30px_rgba(204,255,0,0.1)] sm:min-h-[450px] lg:min-h-[650px]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
          </div>

          {/* Right Side - Details */}
          <div className="text-white">
            {/* Title */}
            <h1 className="mb-4 cursor-default text-3xl font-bold uppercase transition duration-300 hover:translate-x-1 hover:text-[#ccff00] sm:text-5xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mb-6 cursor-default text-base leading-7 text-[#9CA3AF] transition duration-300 hover:translate-x-1 hover:text-white sm:text-lg">
              {workout.description}
            </p>

            {/* Category Tags */}
            <div className="mb-8 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscleGroup) => (
                <span
                  key={muscleGroup}
                  className="cursor-default rounded-full bg-[#ccff00] px-5 py-1 text-[16px] font-semibold text-black transition duration-200 hover:-translate-y-0.5 hover:scale-105 hover:bg-[#d4ff33] hover:shadow-[0_4px_12px_rgba(204,255,0,0.2)]"
                >
                  {muscleGroup}
                </span>
              ))}
            </div>

            {/* Key Specs */}
            <div className="mb-8 rounded-2xl border border-zinc-800 bg-[#171a20] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#ccff00]/50 hover:shadow-[0_8px_25px_rgba(204,255,0,0.06)] sm:p-6">
              <h2 className="mb-5 text-lg font-bold uppercase text-white transition duration-200 hover:text-[#ccff00]">
                Key Specs
              </h2>

              <div className="divide-y divide-zinc-800">
                {/* Equipment */}
                <div className="group/spec flex cursor-default justify-between gap-4 rounded-lg px-2 py-3 transition duration-200 hover:bg-[#ccff00]/5">
                  <span className="text-sm text-[#9CA3AF] transition duration-200 group-hover/spec:translate-x-1 group-hover/spec:text-[#ccff00]">
                    EQUIPMENT
                  </span>
                  <span className="text-right text-sm text-white transition duration-200 group-hover/spec:-translate-x-1 group-hover/spec:text-[#ccff00]">
                    {workout.equipment}
                  </span>
                </div>

                {/* Difficulty */}
                <div className="group/spec flex cursor-default justify-between gap-4 rounded-lg px-2 py-3 transition duration-200 hover:bg-[#ccff00]/5">
                  <span className="text-sm text-[#9CA3AF] transition duration-200 group-hover/spec:translate-x-1 group-hover/spec:text-[#ccff00]">
                    DIFFICULTY
                  </span>
                  <span className="text-right text-sm text-white transition duration-200 group-hover/spec:-translate-x-1 group-hover/spec:text-[#ccff00]">
                    {workout.difficulty}
                  </span>
                </div>

                {/* Sets */}
                <div className="group/spec flex cursor-default justify-between gap-4 rounded-lg px-2 py-3 transition duration-200 hover:bg-[#ccff00]/5">
                  <span className="text-sm text-[#9CA3AF] transition duration-200 group-hover/spec:translate-x-1 group-hover/spec:text-[#ccff00]">
                    SETS
                  </span>
                  <span className="text-right text-sm text-white transition duration-200 group-hover/spec:-translate-x-1 group-hover/spec:text-[#ccff00]">
                    {workout.sets}
                  </span>
                </div>

                {/* Reps */}
                <div className="group/spec flex cursor-default justify-between gap-4 rounded-lg px-2 py-3 transition duration-200 hover:bg-[#ccff00]/5">
                  <span className="text-sm text-[#9CA3AF] transition duration-200 group-hover/spec:translate-x-1 group-hover/spec:text-[#ccff00]">
                    REPS
                  </span>
                  <span className="text-right text-sm text-white transition duration-200 group-hover/spec:-translate-x-1 group-hover/spec:text-[#ccff00]">
                    {workout.reps}
                  </span>
                </div>

                {/* Duration */}
                <div className="group/spec flex cursor-default justify-between gap-4 rounded-lg px-2 py-3 transition duration-200 hover:bg-[#ccff00]/5">
                  <span className="text-sm text-[#9CA3AF] transition duration-200 group-hover/spec:translate-x-1 group-hover/spec:text-[#ccff00]">
                    DURATION
                  </span>
                  <span className="text-right text-sm text-white transition duration-200 group-hover/spec:-translate-x-1 group-hover/spec:text-[#ccff00]">
                    {workout.duration} min
                  </span>
                </div>

                {/* Calories */}
                <div className="group/spec flex cursor-default justify-between gap-4 rounded-lg px-2 py-3 transition duration-200 hover:bg-[#ccff00]/5">
                  <span className="text-sm text-[#9CA3AF] transition duration-200 group-hover/spec:translate-x-1 group-hover/spec:text-[#ccff00]">
                    CALORIES
                  </span>
                  <span className="text-right text-sm text-white transition duration-200 group-hover/spec:-translate-x-1 group-hover/spec:text-[#ccff00]">
                    {workout.caloriesBurned} kcal
                  </span>
                </div>

                {/* Rating */}
                <div className="group/spec flex cursor-default justify-between gap-4 rounded-lg px-2 py-3 transition duration-200 hover:bg-[#ccff00]/5">
                  <span className="text-sm text-[#9CA3AF] transition duration-200 group-hover/spec:translate-x-1 group-hover/spec:text-[#ccff00]">
                    RATING
                  </span>
                  <span className="text-right text-sm text-[#ccff00] transition duration-200 group-hover/spec:-translate-x-1 group-hover/spec:scale-105">
                    ★ {workout.rating}
                  </span>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div>
              <h2 className="mb-5 cursor-default text-lg font-bold uppercase text-white transition duration-200 hover:translate-x-1 hover:text-[#ccff00]">
                Instructions
              </h2>

              <ol className="space-y-4">
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="group/instruction flex cursor-default gap-4 text-sm leading-6 text-[#D1D5DB]"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ccff00] text-sm font-bold text-black transition duration-200 group-hover/instruction:-translate-y-0.5 group-hover/instruction:scale-110 group-hover/instruction:bg-[#d4ff33] group-hover/instruction:shadow-[0_4px_12px_rgba(204,255,0,0.2)]">
                      {index + 1}
                    </span>

                    <span className="transition duration-200 group-hover/instruction:translate-x-1 group-hover/instruction:text-white">
                      {instruction}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Actions */}
            <WorkoutActions workout={workout} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;
