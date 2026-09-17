
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
                <button className="w-full hover:cursor-pointer" type="submit">Add Exercise</button>
            </form>
        </div>
    )
}