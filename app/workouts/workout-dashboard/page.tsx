'use client';
import { useSearchParams } from "next/navigation";

import WorkoutInfo from "@/app/components/WorkoutDashboard/WorkoutInfo";



export default function WorkoutDashboard() {

    const searchParams = useSearchParams();
    const workoutId = searchParams.get("workoutId");
    

    if (!workoutId) {
        return (
            <div>
                <h1>Workout not found</h1>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <WorkoutInfo workoutId={workoutId} />
        </div>
    )
}