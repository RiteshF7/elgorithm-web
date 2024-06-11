'use client'
import React, { useState } from 'react';

interface StageSelectorProps {
    stages: string[];
    onCreate: (stage: string) => void;
    onSelect: (stage: string) => void;
}

const StageSelector: React.FC<StageSelectorProps> = ({ stages, onCreate, onSelect }) => {
    const [newStage, setNewStage] = useState('');

    return (
        <div className="p-4">
            <h2 className="text-xl mb-2">Select or Create a Stage</h2>
            <div className="mb-4">
                <input
                    type="text"
                    className="border p-2 rounded w-full"
                    placeholder="New Stage Name"
                    value={newStage}
                    onChange={(e) => setNewStage(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                    onClick={() => {
                        onCreate(newStage);
                        setNewStage('');
                    }}
                >
                    Create Stage
                </button>
            </div>
            <div>
                <h3 className="text-lg mb-2">Existing Stages</h3>
                {stages.map((stage) => (
                    <button
                        key={stage}
                        className="bg-gray-200 text-gray-800 px-4 py-2 rounded mb-2 w-full"
                        onClick={() => onSelect(stage)}
                    >
                        {stage}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default StageSelector;
