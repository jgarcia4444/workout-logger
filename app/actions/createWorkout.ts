'use server';
import { prisma } from "@/lib/prisma";

export async function createWorkout(workout: { name: string, description: string }) {
    const newWorkout = await prisma.workout.create({
        data: {
            name: workout.name,
            description: workout.description
        }
    });
    return newWorkout;
}