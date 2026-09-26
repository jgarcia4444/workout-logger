'use client';

import {useState} from 'react';

import {Workout} from '@prisma/client';

interface ExerciseInfo {
    workoutId: number;
    name: string;
    description: string;
    sets: number;
    reps: number;
    weight: number;
}

export default function AddExerciseForm({workout, handleCreateExercise}: {workout: Workout, handleCreateExercise: (exerciseInfo: ExerciseInfo) => Promise<boolean>}) {

    const [exerciseName, setExerciseName] = useState('');
    const [exerciseDescription, setExerciseDescription] = useState('');
    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(0);
    const [weight, setWeight] = useState(0);

    const handleAddExercise = async () => {
        if (!exerciseName || !exerciseDescription || !sets || !reps || !weight) {
            return;
        }
        let exercise: ExerciseInfo = {
            workoutId: workout.id,
            name: exerciseName,
            description: exerciseDescription,
            sets: sets,
            reps: reps,
            weight: weight
        }
        const success = await handleCreateExercise(exercise);
        if (!success) {
            return;
        }
        setExerciseName('');
        setExerciseDescription('');
        setSets(0);
        setReps(0);
        setWeight(0);
    }

    const handleExerciseNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExerciseName(e.target.value);
    }

    const handleExerciseDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setExerciseDescription(e.target.value);
    }

    const handleSetsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSets(parseInt(e.target.value));
    }

    const handleRepsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReps(parseInt(e.target.value));
    }

    const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWeight(parseInt(e.target.value));
    }

    return (
        <div className="w-full h-1/2 flex flex-col items-center justify-center border-b border-gray-600 p-4">
            <div className="flex flex-row w-full items-center justify-start gap-2">
                <div className="w-1 h-full bg-primary-orange rounded-full"/>
                <h4 className="text-md font-bold">ADD EXERCISE</h4>
            </div>
            <form action={handleAddExercise} className="w-full flex flex-col gap-2 h-full">
                <div className="w-full flex flex-col">
                    <label className="text-gray-500 font-bold text-xs">Exercise Name</label>
                    <input className="w-full bg-input-gray border border-white/10 rounded-lg p-2  text-white" type="text" placeholder="Exercise Name" value={exerciseName} onChange={handleExerciseNameChange} />
                </div>
                <div className="w-full flex flex-col">
                    <label className="text-gray-500 font-bold text-xs">Exercise Description</label>
                    <textarea className="w-full bg-input-gray border border-white/10 rounded-lg p-2 text-white" placeholder="Exercise Description" value={exerciseDescription} onChange={handleExerciseDescriptionChange} />
                </div>
                <div className="w-full flex gap-2">
                    <div className="w-full flex flex-col">
                        <label className="text-gray-500 font-bold text-xs">Sets</label>
                        <input className="w-full bg-input-gray border border-white/10 rounded-lg p-2 text-white" type="number" placeholder="Sets" value={sets} onChange={handleSetsChange} />
                    </div>
                    <div className="w-full flex flex-col">
                        <label className="text-gray-500 font-bold text-xs">Reps</label>
                        <input className="w-full bg-input-gray border border-white/10 rounded-lg p-2 text-white" type="number" placeholder="Reps" value={reps} onChange={handleRepsChange} />
                    </div>
                    <div className="w-full flex flex-col">
                        <label className="text-gray-500 font-bold text-xs">Weight</label>
                        <input className="w-full bg-input-gray border border-white/10 rounded-lg p-2 text-white" type="number" placeholder="Weight" value={weight} onChange={handleWeightChange} />
                    </div>
                </div>
                    <button type="submit" className="px-4 py-2 bg-primary-orange rounded-lg hover:cursor-pointer text-white font-bold transition-all duration-200 hover:bg-primary-orange/80 hover:text-white active:bg-primary-orange/60 active:text-white w-full mt-4">+ ADD EXERCISE</button>
            </form>
        </div>
    )
}