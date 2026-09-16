
export default function WorkoutInfo({workout}: {workout: {name: string, id: number} | null}) {
    
    return (
        <div className="w-full flex items-start justify-center">
            <div className="w-full flex flex-row items-start px-2 py-4 bg-gray-700/40 rounded-lg shadow-inner shadow-gray-600/50 relative">
                <h1 className="text-4xl font-bold">{workout?.name} </h1>
            </div>
        </div>
    )
}