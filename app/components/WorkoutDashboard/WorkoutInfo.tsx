
import { findWorkout } from "@/app/actions/findWorkout"

export default async function WorkoutInfo({workoutId}: {workoutId: string}) {

    const workout = await findWorkout(workoutId);
       
    return (
        <div>
            <h1>Workout Info</h1>
            {workout && (
                <>
                    <p>Workout ID: {workout.id}</p>
                    <p>Workout Name: {workout.name}</p>
                </>
            )}
        </div>
    )
}