
import Workouts from "@/app/components/Workouts";
import Jumbotron from "@/app/components/Jumbotron";

import {prisma} from '@/lib/prisma'
import { Workout } from "@prisma/client";

export default async function Home() {

  const workouts = await prisma.workout.findMany() as [Workout];

  return (
    <div className="flex flex-col flex-1 items-center justify-start font-sans bg-black px-4 py-2 w-full">
      <Jumbotron />
      <Workouts workouts={workouts}/>
    </div>
  );
}
