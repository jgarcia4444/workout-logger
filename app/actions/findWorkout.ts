"use server";
import { prisma } from "@/lib/prisma";

export async function findWorkout(workoutId: number) {
    const workout = await prisma.workout.findUnique({
        where: {
            id: workoutId
        },
        include: {
            exercises: true
        }
    })
    return workout;
}
