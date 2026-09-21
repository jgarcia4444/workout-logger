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
    const workoutId = parseInt(searchParams.get("workoutId") || "0");
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
        <div className="w-full h-screen mx-auto flex flex-col gap-4 items-center justify-center">
            <div className="w-full flex flex-row items-center justify-center gap-4 border-b border-gray-600 px-4 py-1">
                <h1 className="text-2xl text-shadow-md text-shadow-primary-orange font-thin text-primary-orange font-sans">FORGE</h1>
                <div className="w-px h-8 bg-gray-600 rounded-2xl"></div>
                <WorkoutInfo workout={workout} />
            </div>
            <div className="flex flex-row gap-4 w-full h-5/6">
                <div className="w-2/3 px-2 py-4 bg-gray-700/40 rounded-lg shadow-inner shadow-gray-600/50 flex flex-col items-center justify-center">
                    <AddExerciseForm />
                    <ExercisVideos />
                </div>
                <div className="w-1/3 px-2 py-4 bg-gray-700/40 rounded-lg shadow-inner shadow-gray-600/50">
                    <ExercisesList workoutId={workoutId} />
                </div>
            </div>
        </div>
    )
}