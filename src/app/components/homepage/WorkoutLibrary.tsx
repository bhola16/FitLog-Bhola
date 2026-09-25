
import { IWorkoutType } from "@/type/type";
import WorkoutLibraryClient from "./WorkoutLibraryClient";

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
    <section className="mx-4 my-8 sm:mx-6 sm:my-10 lg:mx-10 lg:my-14">
      <div className="container mx-auto">
        <div className="mb-6 sm:mb-8">
          <h2 className="mb-1 text-3xl font-bold uppercase text-white sm:text-4xl">
            The Library
          </h2>

          <p className="text-sm text-[#9CA3AF] sm:text-base">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <WorkoutLibraryClient workouts={workOutsDatas} />
      </div>
    </section>
  );
};

export default WorkoutLibrary;
