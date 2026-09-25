import { IWorkoutType } from "@/type/type";

const getWorkOutsData = async (): Promise<IWorkoutType[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const data = res.json();
  return data;
};

const WorkoutLibrary = async () => {
  const workOutsDatas = await getWorkOutsData();

  return (
    <section className="mx-4 my-10 sm:mx-6 bg-[#15171D] lg:mx-10">
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

        <h2>Workout card is heree...</h2>
      </div>
    </section>
  );
};

export default WorkoutLibrary;
