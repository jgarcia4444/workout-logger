
import Workouts from "@/app/components/Workouts";
import Jumbotron from "@/app/components/Jumbotron";

import {prisma} from '@/lib/prisma'
import { Workout } from "@prisma/client";

export default async function Home() {

  const workouts = await prisma.workout.findMany() as [Workout];

  const createWorkout = async (workout: { name: string, description: string} | null): Promise<{success: boolean}> => {
    "use server"
    if (workout?.name && workout?.description) {
      await prisma.workout.create({
        data: {
          name: workout.name,
          description: workout.description
        }
      });
      return {success: true};
    } else if (!workout) {
      // Handle the case where workout is null
      console.log("No workout data provided");
      return {success: false};
    } else if (workout.name === "") {
      // Handle the case where workout name is empty
      console.log("Workout name is empty");
      return {success: false};
    } else if (workout.description === "") {
      console.log("Workout description is empty");  
      return {success: false};
    }
    return {success: false};
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-start font-sans bg-black px-4 py-2 w-full">
      <Jumbotron />
      <Workouts createWorkout={createWorkout} workouts={workouts}/>
    </div>
  );
}
