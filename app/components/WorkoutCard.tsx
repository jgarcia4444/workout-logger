
import { Workout } from "@prisma/client";

export default function WorkoutCard({ workout }: { workout: Workout }) {
    return (
        <div>
            <h1>Workout Card {workout.name}</h1>
            <p>{workout.description}</p>
        </div>
    );
}