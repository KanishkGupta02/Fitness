import React, { useState } from 'react';
import { Link } from 'react-router-dom' //helps in navigation from one page to another without refreshing the page

const goalsData = [
    { id: 1, label: "Weight Loss" },
    { id: 2, label: "Muscle Gain" },
    { id: 3, label: "Flexibility and Mobility" },
    { id: 4, label: "General Fitness" },
    { id: 5, label: "Event - specific training" },
    { id: 6, label: "Mindfulness and Mental Health" }
];

const GoalSelection = ({ title, onConfirm }) => {
    const [selectedGoals, setSelectedGoals] = useState(new Set());

    const handleToggleGoal = (id) => {
        setSelectedGoals((prevSelectedGoals) => {
            const newSelectedGoals = new Set(prevSelectedGoals);
            if (newSelectedGoals.has(id)) {
                newSelectedGoals.delete(id);
            } else {
                newSelectedGoals.add(id);
            }
            return newSelectedGoals;
        });
    };

    return (
        <div className="bg-[#fcfcfc] w-[450px] h-[720px] mx-auto rounded-lg flex flex-col my-5 px-5">
            <div className="text-[#2c2b2b] font-semibold text-2xl text-center my-8">{title}</div>
            <div>
                {goalsData.map((goal) => (
                    <label key={goal.id} className="flex items-center p-4 bg-[#f1f1f1] rounded-xl mb-4">
                        <span className="text-[#2c2b2b] font-semibold">{goal.label}</span>
                        <input
                            type="checkbox"
                            checked={selectedGoals.has(goal.id)}
                            onChange={() => handleToggleGoal(goal.id)}
                            className="ml-auto appearance-none checked:bg-[#809AFF] w-6 h-6 border-2 border-[#809AFF] rounded-md cursor-pointer"
                        />
                    </label>
                ))}
            </div>
            <Link to='/tracker'>
                <button
                    onClick={() => onConfirm(Array.from(selectedGoals))}
                    className="mt-[60px]  py-4 w-full rounded-lg bg-gradient-to-r from-[#7BAAF7] to-[#a182f0] text-white text-lg font-semibold"
                >
                    Confirm
                </button>
            </Link>

            <div className="flex justify-center items-center mt-2">
                <Link to='/sign-in'>
                    <button
                        onClick={() => onConfirm(Array.from(selectedGoals))}
                        className="py-4 w-24  rounded-lg bg-gradient-to-r from-[#95add4] to-[#5f3fb0] text-white text-sm font-semibold"
                    >
                        Back
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default function App() {
    const handleConfirm = (selectedGoals) => {
        console.log('Selected goals:', selectedGoals);
        // Perform confirm action, like navigating to the next screen or making an API call
    };

    return (
        <div className="App">
            <GoalSelection title="What are your goals?" onConfirm={handleConfirm} />
        </div>
    );
}
