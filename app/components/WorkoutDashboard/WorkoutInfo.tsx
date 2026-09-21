
import WorkoutDuration from "@/app/components/WorkoutDashboard/WorkoutDuration"

export default function WorkoutInfo({workout}: {workout: {name: string, id: number} | null}) {
    
    return (
        <div className="w-full flex items-start justify-center">
            <div className="w-full flex flex-row items-center justify-between px-2 py-4 relative">
                <h1 className="text-3xl font-black">{workout?.name} </h1>
                <div className="flex flex-row gap-8">
                    <WorkoutDuration />
                    <button className="px-4 py-2 font-semibold bg-primary-orange text-white rounded transition-all duration-300 hover:cursor-pointer hover:scale-105 hover:bg-primary-orange/80 active:bg-primary-orange active:scale-95">Finish</button>
                </div>
            </div>
        </div>
    )
}