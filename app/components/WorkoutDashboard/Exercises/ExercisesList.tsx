
import { Exercise } from "@prisma/client";
import { Workout } from "@prisma/client";

import ExerciseCard from "@/app/components/WorkoutDashboard/Exercises/ExerciseCard";

export default function ExercisesList({ workout, exercises }: { workout: Workout, exercises: Exercise[] }) {

    const renderExercises = (exercises: Exercise[]) => {
        return exercises.map((exercise) => (
                <div className="w-full p-2" key={exercise.id}>
                    <ExerciseCard exercise={exercise} />
                </div>
            ))
    }

    return (
        <div className="w-full h-full flex flex-col items-start justify-start overflow-y-auto">
            <div className="w-full border-b border-gray-600 p-4 flex flex-row items-center justify-start gap-2">
                <div className="w-1 h-full bg-primary-orange rounded-full"/>
                <h1 className="text-xl font-bold text-white">Exercises</h1>
            </div>
            {renderExercises(exercises)}
        </div>
    );
}
