'use client';
import { useEffect, useState } from "react";
import { findWorkout } from "@/app/actions/findWorkout";
import { Exercise, Workout } from "@prisma/client";
import ExerciseCard from "@/app/components/WorkoutDashboard/Exercises/ExerciseCard";

export default function ExercisesList({ workoutId }: { workoutId: number }) {
    
    const [workout, setWorkout] = useState<Workout | null>(null);
    const [exercises, setExercises] = useState<Exercise[]>([]);

    useEffect(() => {
        const fetchWorkout = async () => {
            const workout = await findWorkout(workoutId);
            setWorkout(workout);
            setExercises(workout?.exercises || []);
        }
        fetchWorkout();
    }, [workoutId]);

    const renderExercises = (exercises: Exercise[]) => {
        return exercises.map((exercise) => (
                <div className="w-full p-2" key={exercise.id}>
                    <ExerciseCard exercise={exercise} />
                </div>
            ))
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center overflow-y-auto">
            <h1 className="text-xl font-bold text-black">Exercises</h1>
            {renderExercises(exercises)}
        </div>
    );
}
