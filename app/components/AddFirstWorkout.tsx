import { FiPlus } from "react-icons/fi";

export default function AddFirstWorkout({startAddWorkout}: {startAddWorkout: () => void}) {

    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            <h1 className="text-xl font-bold">Add First Workout</h1>
            <button onClick={startAddWorkout} className="p-4 bg-green-800/40 shadow-inner shadow-green-700/50 rounded-full hover:bg-green-800/70 hover:shadow-green-700/80 transition-all duration-300 hover:cursor-pointer active:bg-green-800/60"><FiPlus color="black" size={32} /></button>
        </div>
    );
}