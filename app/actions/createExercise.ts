"use server";
import { prisma } from "@/lib/prisma";

export async function createExercise(exercise: { workoutId: number, name: string, description: string, sets: number, reps: number, weight: number }) {
    try {
        const newExercise = await prisma.exercise.create({
        data: {
            workoutId: parseInt(exercise.workoutId),
            name: exercise.name,
            description: exercise.description,
            sets: exercise.sets,
            reps: exercise.reps,
            weight: exercise.weight
        }
    });
    return newExercise;
    } catch (error) {
        console.error(error);
        return null;
    }
}