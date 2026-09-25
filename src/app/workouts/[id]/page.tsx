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
    <main className="mx-4 my-10 sm:mx-6 lg:mx-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Side - Image */}
          <div className="relative min-h-[400px] overflow-hidden rounded-2xl border border-zinc-800 bg-[#171a20] lg:min-h-[650px]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Right Side - Details */}
          <div className="text-white">
            {/* Title */}
            <h1 className="mb-4 text-4xl font-bold uppercase sm:text-5xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mb-6 text-lg leading-7 text-[#9CA3AF]">
              {workout.description}
            </p>

            {/* Category Tags */}
            <div className="mb-8 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscleGroup) => (
                <span
                  key={muscleGroup}
                  className="rounded-full bg-[#ccff00] px-5 py-1 text-[16px] font-semibold text-black"
                >
                  {muscleGroup}
                </span>
              ))}
            </div>

            {/* Key Specs */}
            <div className="mb-8 rounded-2xl border border-zinc-800 bg-[#171a20] p-5">
              <h2 className="mb-5 text-lg font-bold uppercase text-white">
                Key Specs
              </h2>

              <div className="divide-y divide-zinc-800">
                <div className="flex justify-between py-3">
                  <span className="text-sm text-[#9CA3AF]">EQUIPMENT</span>
                  <span className="text-sm text-white">
                    {workout.equipment}
                  </span>
                </div>

                <div className="flex justify-between py-3">
                  <span className="text-sm text-[#9CA3AF]">DIFFICULTY</span>
                  <span className="text-sm text-white">
                    {workout.difficulty}
                  </span>
                </div>

                <div className="flex justify-between py-3">
                  <span className="text-sm text-[#9CA3AF]">SETS</span>
                  <span className="text-sm text-white">{workout.sets}</span>
                </div>

                <div className="flex justify-between py-3">
                  <span className="text-sm text-[#9CA3AF]">REPS</span>
                  <span className="text-sm text-white">{workout.reps}</span>
                </div>

                <div className="flex justify-between py-3">
                  <span className="text-sm text-[#9CA3AF]">DURATION</span>
                  <span className="text-sm text-white">
                    {workout.duration} min
                  </span>
                </div>

                <div className="flex justify-between py-3">
                  <span className="text-sm text-[#9CA3AF]">CALORIES</span>
                  <span className="text-sm text-white">
                    {workout.caloriesBurned} kcal
                  </span>
                </div>

                <div className="flex justify-between py-3">
                  <span className="text-sm text-[#9CA3AF]">RATING</span>
                  <span className="text-sm text-[#ccff00]">
                    ★ {workout.rating}
                  </span>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div>
              <h2 className="mb-5 text-lg font-bold uppercase text-white">
                Instructions
              </h2>

              <ol className="space-y-4">
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-4 text-sm leading-6 text-[#D1D5DB]"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ccff00] text-sm font-bold text-black">
                      {index + 1}
                    </span>

                    <span>{instruction}</span>
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
