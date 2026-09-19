'use client';

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { findWorkout } from "@/app/actions/findWorkout";

import WorkoutInfo from "@/app/components/WorkoutDashboard/WorkoutInfo";
import AddExerciseForm from "@/app/components/WorkoutDashboard/Exercises/AddExerciseForm";
import ExercisVideos from "@/app/components/WorkoutDashboard/Exercises/ExercisVideos";
import ExercisesList from "@/app/components/WorkoutDashboard/Exercises/ExercisesList";

export default function WorkoutDashboard() {

    const searchParams = useSearchParams();
    const workoutId = searchParams.get("workoutId");
    const [workout, setWorkout] = useState<{name: string, id: number} | null>(null);
    
    useEffect(() => {
        if (workoutId) {
            findWorkout(workoutId).then((workout) => {
                setWorkout(workout);
            });
        }
    }, [workoutId])

    

    if (!workoutId) {
        return (
            <div>
                <h1>Workout not found</h1>
            </div>
        )
    }

    return (
        <div className="w-full h-screen mx-auto p-4 flex flex-col gap-4 items-center justify-center">
            <WorkoutInfo workout={workout} />
            <div className="flex flex-row gap-4 w-full h-5/6">
                <div className="w-2/3 px-2 py-4 bg-gray-700/40 rounded-lg shadow-inner shadow-gray-600/50 flex flex-col items-center justify-center">
                    <AddExerciseForm />
                    <ExercisVideos />
                </div>
                <div className="w-1/3 px-2 py-4 bg-gray-700/40 rounded-lg shadow-inner shadow-gray-600/50">
                    <ExercisesList />
                </div>
            </div>
        </div>
    )
}