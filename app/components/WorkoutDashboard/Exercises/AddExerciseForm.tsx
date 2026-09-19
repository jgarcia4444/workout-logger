
export default function AddExerciseForm() {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <form className="w-full flex flex-col gap-2 h-full">
                <input className="w-full bg-black/40 rounded-lg p-2 shadow-inner shadow-black text-white" type="text" placeholder="Exercise Name" />
                <textarea className="w-full bg-black/40 rounded-lg p-2 shadow-inner shadow-black text-white" placeholder="Exercise Description" />
                <div className="w-full flex gap-2">
                    <input className="w-full bg-black/40 rounded-lg p-2 shadow-inner shadow-black text-white" type="number" placeholder="Sets" />
                    <input className="w-full bg-black/40 rounded-lg p-2 shadow-inner shadow-black text-white" type="number" placeholder="Reps" />
                    <input className="w-full bg-black/40 rounded-lg p-2 shadow-inner shadow-black text-white" type="number" placeholder="Weight" />
                </div>
                <div className="w-full flex items-end justify-end">
                    <button className="px-4 py-2 bg-gray-700/40 rounded-lg hover:cursor-pointer w-48 text-black font-bold transition-all duration-200 hover:bg-gray-500/60 hover:text-white active:bg-gray-700/80 active:text-white" type="submit">Add Exercise</button>
                </div>
            </form>
        </div>
    )
}