'use client';

import { useState } from "react";
import { Workout } from "@prisma/client";

import WorkoutCard from "@/app/components/WorkoutCard";
import AddFirstWorkout from "@/app/components/AddFirstWorkout";

export default function Workouts({workouts}: {workouts: [Workout]}) {

  const [showForm, setShowForm] = useState(false);

  const renderWorkouts = () => {
    if (workouts.length > 0 ) {
        return workouts.map((workout, index) => <WorkoutCard workout={workout} key={index} />)
    } else {
      return <AddFirstWorkout startAddWorkout={() => setShowForm(true)} />
    }
  }
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-3xl font-bold font-sans">Workouts</h1>
      <div className="flex flex-row px-2 py-2 bg-gray-700/40 rounded-lg h-64 shadow-inner shadow-gray-600/50 relative">
        {renderWorkouts()}
      </div>
    </div>
  );
}
