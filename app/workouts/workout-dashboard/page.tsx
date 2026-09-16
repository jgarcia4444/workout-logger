'use client';

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { findWorkout } from "@/app/actions/findWorkout";

import WorkoutInfo from "@/app/components/WorkoutDashboard/WorkoutInfo";

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
        <div className="w-full mx-auto p-2 flex flex-col gap-2">
            <WorkoutInfo workout={workout} />
            <div className="flex flex-row gap-2 w-full">
                <div className="w-2/3 px-2 py-4 bg-gray-700/40 rounded-lg shadow-inner shadow-gray-600/50">
                    wec
                </div>
                <div className="w-1/3 px-2 py-4 bg-gray-700/40 rounded-lg shadow-inner shadow-gray-600/50">
                    tyn
                </div>
            </div>
        </div>
    )
}