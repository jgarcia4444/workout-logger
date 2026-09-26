
import { FiEdit, FiTrash } from "react-icons/fi";

import { Exercise } from "@prisma/client";

export default function ExerciseCard({ exercise }: { exercise: Exercise }) {

    const {sets, reps, weight, name, description} = exercise;

    return (
        <div className="w-full p-2 border border-gray-200 rounded-lg flex flex-col gap-2 items-start justify-center relative">
            <h2 className="text-md font-bold text-white">{name}</h2>
            <p className="text-sm text-gray-400">{description}</p>
            <div className="flex flex-row gap-2 items-center justify-center">
                <div className="flex flex-row pr">{sets}&nbsp;<span className="text-gray-400"> sets  |</span></div>
                <div className="flex flex-row pr">{reps}&nbsp;<span className="text-gray-400"> reps  |</span></div>
                <div className="flex flex-row">{weight}&nbsp;<span className="text-gray-400"> lbs</span></div>
            </div>
            <div className="absolute top-2 right-2 flex flex-row gap-4">
                <button><FiEdit className="text-blue-400/50 hover:cursor-pointer hover:text-blue-400" /></button>
                <button><FiTrash className="text-red-400/50 hover:cursor-pointer hover:text-red-400" /></button>
            </div>
        </div>
    )
}