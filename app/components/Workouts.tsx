
import { prisma } from "@/lib/prisma";
import WorkoutCard from "@/app/components/WorkoutCard";
import AddFirstWorkout from "@/app/components/AddFirstWorkout";

export default async function Workouts() {
  const workouts = await prisma.workout.findMany();

  const renderWorkouts = () => {
    if (workouts.length > 0 ) {
        return workouts.map((workout, index) => <WorkoutCard workout={workout} key={index} />)
    } else {
      return <AddFirstWorkout />
    }
  }
  return (
    <div>
      <h1>Workouts</h1>
      {renderWorkouts()}
    </div>
  );
}
