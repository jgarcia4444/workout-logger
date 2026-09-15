'use server'
import { prisma } from "@/lib/prisma";

export default async function WorkoutInfo({workoutId}: {workoutId: string}) {
    const workout = await prisma.workout.findUnique({
        where: {
            id: parseInt(workoutId)
        },
        select: {
            id: true,
            name: true
        }
    })
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