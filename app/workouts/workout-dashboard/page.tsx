import { prisma } from "@/lib/prisma";

type SearchParams = {
  workoutId: number;
}

export default async function WorkoutDashboard({searchParams}: {searchParams: SearchParams}) {

    const workout = await prisma.workout.findUnique({
        where: {
            id: searchParams.workoutId
        }
    })

    if (!workout) {
        return (
            <div>
                <h1>Workout not found</h1>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold">Workout Dashboard - {workout.name}</h1>
        </div>
    )
}