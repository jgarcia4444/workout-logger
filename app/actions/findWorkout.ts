"use server";
import { prisma } from "@/lib/prisma";

export async function findWorkout(workoutId: string) {
    const workout = await prisma.workout.findUnique({
        where: {
            id: parseInt(workoutId)
        },
        select: {
            id: true,
            name: true
        }
    })
    return workout;
}
