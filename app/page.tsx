
import Workouts from "@/app/components/Workouts";

export default async function Home() {

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-black ">
      <h1>Workout Logger</h1>
      <Workouts  />
    </div>
  );
}
