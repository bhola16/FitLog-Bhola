import { IWorkoutType } from "@/type/type";
import WorkoutLibraryClient from "./WorkoutLibraryClient";

const getWorkOutsData = async (): Promise<IWorkoutType[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return res.json();
};

const WorkoutLibrary = async () => {
  const workOutsDatas = await getWorkOutsData();

  return (
    <section
      id="library"
      className="group mx-4 my-8 transition duration-300 sm:mx-6 sm:my-10 lg:mx-10 lg:my-14"
    >
      <div className="container mx-auto">
        {/* Library Header */}
        <div className="mb-6 sm:mb-8">
          <h2 className="mb-1 text-3xl font-bold uppercase text-white transition duration-300 hover:translate-x-1 hover:text-[#ccff00] sm:text-4xl">
            The Library
          </h2>

          <p className="text-sm text-[#9CA3AF] transition duration-300 hover:translate-x-1 hover:text-white sm:text-base">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <WorkoutLibraryClient workouts={workOutsDatas} />
      </div>
    </section>
  );
};

export default WorkoutLibrary;
