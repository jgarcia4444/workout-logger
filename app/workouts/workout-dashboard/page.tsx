'use client';

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { findWorkout } from "@/app/actions/findWorkout";

import WorkoutInfo from "@/app/components/WorkoutDashboard/WorkoutInfo";
import AddExerciseForm from "@/app/components/WorkoutDashboard/Exercises/AddExerciseForm";
import ExerciseVideos from "@/app/components/WorkoutDashboard/Exercises/ExerciseVideos";
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
        <div className="w-full h-screen mx-auto flex flex-col items-center justify-center">
            <div className="w-full flex flex-row items-center justify-center gap-4 border-b border-gray-600 px-4 py-1">
                <h1 className="text-2xl text-shadow-md text-shadow-primary-orange font-thin text-primary-orange font-sans">FORGE</h1>
                <div className="w-px h-8 bg-gray-600 rounded-2xl"></div>
                <WorkoutInfo workout={workout} />
            </div>
            <div className="flex flex-row w-full h-full">
                <div className="w-2/3 h-full flex flex-col items-center justify-center border-r border-gray-600">
                    <AddExerciseForm />
                    <ExerciseVideos />
                </div>
                <div className="w-1/3 h-full">
                    <ExercisesList workoutId={workoutId} />
                </div>
            </div>
        </div>
    )
}