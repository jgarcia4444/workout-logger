

import { Exercise } from "@prisma/client";

export default function ExerciseCard({ exercise }: { exercise: Exercise }) {

    return (
        <div className="w-full p-2 border border-gray-200 rounded-lg">
            <h2 className="text-lg font-bold text-black">{exercise.name}</h2>
        </div>
    )
}