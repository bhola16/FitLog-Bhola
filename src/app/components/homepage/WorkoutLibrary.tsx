import { IWorkoutType } from "@/type/type";
import WorkoutCard from "../shared/WorkOutCard";

const getWorkOutsData = async (): Promise<IWorkoutType[]> => {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

      if (!res.ok) {
        throw new Error("Failed to fetch workouts");
      }

      return res.json();
    } catch (error) {
      if (attempt === 3) {
        throw error;
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  throw new Error("Failed to fetch workouts");
};

const WorkoutLibrary = async () => {
  const workOutsDatas = await getWorkOutsData();

  return (
    <section className="mx-4 my-10 sm:mx-6 lg:mx-10">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="mb-1 text-4xl font-bold uppercase text-white">
            The Library
          </h2>

          <p className="text-[#9CA3AF]">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Workout Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {workOutsDatas.map((workOutData) => (
            <WorkoutCard key={workOutData.id} workOutData={workOutData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutLibrary;
