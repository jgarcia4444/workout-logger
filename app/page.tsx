
import Workouts from "@/app/components/Workouts";
import Jumbotron from "@/app/components/Jumbotron";

import {prisma} from '@/lib/prisma'
import { Workout } from "@prisma/client";

export default async function Home() {

  const workouts = await prisma.workout.findMany() as [Workout];

  const createWorkout = async (workout: { name: string, description: string} | null): Promise<{success: boolean, workoutId?: number}> => {
    "use server"
    if (workout?.name && workout?.description) {
      const newWorkout = await prisma.workout.create({
        data: {
          name: workout.name,
          description: workout.description
        }
      });
      console.log("NEW WORKOUT", newWorkout);
      return {success: true, workoutId: newWorkout.id};
    } else if (!workout) {
      console.log("No workout data provided");
      return {success: false, workoutId: undefined};
    } else if (workout.name === "") {
      console.log("Workout name is empty");
      return {success: false, workoutId: undefined};
    } else if (workout.description === "") {
      console.log("Workout description is empty");  
      return {success: false, workoutId: undefined};
    }
    return {success: false, workoutId: undefined};
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-start font-sans bg-black px-4 py-2 w-full">
      <Jumbotron />
      <Workouts createWorkout={createWorkout} workouts={workouts}/>
    </div>
  );
}
