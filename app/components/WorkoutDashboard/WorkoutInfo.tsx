"use client"
import { useEffect, useState } from "react";
import { findWorkout } from "@/app/actions/findWorkout"

export default function WorkoutInfo({workoutId}: {workoutId: string}) {

    const [workout, setWorkout] = useState<{name: string, id: number} | null>(null);

    useEffect(() => {
        const fetchWorkout = async () => {
            const workout = await findWorkout(workoutId);
            setWorkout(workout);
        }
        fetchWorkout();
    }, [workoutId])

       
    return (
        <div className="w-full flex items-start justify-center">
            <div className="w-full flex flex-row items-start px-2 py-4 bg-gray-700/40 rounded-lg shadow-inner shadow-gray-600/50 relative">
                <h1 className="text-4xl font-bold">{workout?.name} </h1>
            </div>
        </div>
    )
}