"use server";
import { prisma } from "@/lib/prisma";

export async function findExercisesByWorkoutId(workoutId: number) {
    const exercises = await prisma.exercise.findMany({
        where: {
            workoutId: workoutId
        }
    });
    const sortedExercises = exercises.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
    return sortedExercises;
}