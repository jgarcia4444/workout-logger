'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Workout } from "@prisma/client";

import WorkoutCard from "@/app/components/WorkoutCard";
import AddFirstWorkout from "@/app/components/AddFirstWorkout";

import { createWorkout } from "@/app/actions/createWorkout";

export default function Workouts({workouts}: {workouts: [Workout]}) {

  const [showForm, setShowForm] = useState(false);
  const [workoutName, setWorkoutName] = useState("");
  const [nameError, setNameError] = useState("");
  const [workoutDescription, setWorkoutDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const renderWorkouts = () => {
    if (workouts.length > 0 ) {
        return workouts.map((workout, index) => <WorkoutCard workout={workout} key={index} />)
    } else {
      return <AddFirstWorkout startAddWorkout={() => setShowForm(true)} />
    }
  }

  const router = useRouter();

  const handleStartPressed = async (e: React.FormEvent) => {
    e.preventDefault();
    setNameError("");
    setDescriptionError("");
    if (workoutName.trim() === "") {
      setNameError("Workout name is required");
    }
    if (workoutDescription.trim() === "") {
      setDescriptionError("Workout description is required");
    }
    if (nameError === "" && descriptionError === "") {
      let workoutInfo = {
        name: workoutName,
        description: workoutDescription
      }
      console.log()
      const result = await createWorkout(workoutInfo);
        console.log("RESULT FROM CREATE WORKOUT", result);
        if (result.id) {
          setShowForm(false);
          setWorkoutName("");
          setWorkoutDescription("");
          router.push(`/workouts/workout-dashboard?workoutId=${result.id}`)
        } else {
          setGeneralError("Failed to create workout");
          console.log("Failed to create workout");
        }
    }
  }

  const startWorkoutForm = (
    <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center rounded-lg">
      <form className="w-full h-ful rounded-lg flex flex-col items-center justify-center gap-2">
        <div className="w-1/2 flex flex-col items-center justify-center mx-auto ">
          <div className="flex flex-col w-full">
            <label className="font-bold" htmlFor="workoutName">Workout Name</label>
            <input placeholder="Name" value={workoutName} name="workoutName" onChange={(e) => setWorkoutName(e.target.value)}
            className="bg-black rounded-lg shadow-inner shadow-white/20 py-1 px-2" />
          </div>
          <div className="flex flex-col w-full">
            <label>Description</label>
            <textarea value={workoutDescription} name="workoutDescription" onChange={(e) => setWorkoutDescription(e.target.value)} rows={4} className="bg-black rounded-lg shadow-inner shadow-white/20 py-1 px-2" />
          </div>
        </div>
        <button onClick={handleStartPressed} type="submit" className="px-6 py-2 bg-green-800/40 shadow-inner shadow-green-700/50 rounded-lg hover:bg-green-800/70 hover:shadow-green-700/80 transition-all duration-300 hover:cursor-pointer active:bg-green-800/60 font-bold font-sans">Start</button>
      </form>
    </div>
  )

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-3xl font-bold font-sans">Workouts</h1>
      <div className="flex flex-row px-2 py-2 bg-gray-700/40 rounded-lg h-64 shadow-inner shadow-gray-600/50 relative w-full">
      {showForm === true ?
        startWorkoutForm
      :
        renderWorkouts()
      }
      </div>
    </div>
  );
}
