
import Workouts from "@/app/components/Workouts";

export default async function Home() {

  return (
    <div className="flex flex-col flex-1 items-center justify-start font-sans bg-black px-4 py-2">
      <div className="w-full max-w-4xl text-center py-16">
        <h1 className="text-5xl font-bold font-sans text-white">Workout Logger</h1>
      </div>
      <Workouts  />
    </div>
  );
}
