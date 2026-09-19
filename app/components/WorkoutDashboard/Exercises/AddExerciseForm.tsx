'use client';

import {useState} from 'react';
export default function AddExerciseForm() {

    const [exerciseName, setExerciseName] = useState('');
    const [exerciseDescription, setExerciseDescription] = useState('');
    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(0);
    const [weight, setWeight] = useState(0);

    const handleAddExercise = () => {
        // TODO: Add exercise logic
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
        <div className="w-full h-1/2 flex flex-col items-center justify-center">
            <form className="w-full flex flex-col gap-2 h-full">
                <div className="w-full flex flex-col">
                    <label className="text-black font-bold text-sm">Exercise Name</label>
                    <input className="w-full bg-black/40 rounded-lg p-2 shadow-inner shadow-black text-white" type="text" placeholder="Exercise Name" value={exerciseName} onChange={handleExerciseNameChange} />
                </div>
                <div className="w-full flex flex-col">
                    <label className="text-black font-bold text-sm">Exercise Description</label>
                    <textarea className="w-full bg-black/40 rounded-lg p-2 shadow-inner shadow-black text-white" placeholder="Exercise Description" value={exerciseDescription} onChange={handleExerciseDescriptionChange} />
                </div>
                <div className="w-full flex gap-2">
                    <div className="w-full flex flex-col">
                        <label className="text-black font-bold text-sm">Sets</label>
                        <input className="w-full bg-black/40 rounded-lg p-2 shadow-inner shadow-black text-white" type="number" placeholder="Sets" value={sets} onChange={handleSetsChange} />
                    </div>
                    <div className="w-full flex flex-col">
                        <label className="text-black font-bold text-sm">Reps</label>
                        <input className="w-full bg-black/40 rounded-lg p-2 shadow-inner shadow-black text-white" type="number" placeholder="Reps" value={reps} onChange={handleRepsChange} />
                    </div>
                    <div className="w-full flex flex-col">
                        <label className="text-black font-bold text-sm">Weight</label>
                        <input className="w-full bg-black/40 rounded-lg p-2 shadow-inner shadow-black text-white" type="number" placeholder="Weight" value={weight} onChange={handleWeightChange} />
                    </div>
                </div>
                <div className="w-full flex items-end justify-end">
                    <button onClick={handleAddExercise} className="px-4 py-2 bg-gray-700/40 rounded-lg hover:cursor-pointer w-48 text-black font-bold transition-all duration-200 hover:bg-gray-500/60 hover:text-white active:bg-gray-700/80 active:text-white" type="submit">Add Exercise</button>
                </div>
            </form>
        </div>
    )
}