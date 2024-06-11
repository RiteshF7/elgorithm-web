'use client'
import React, { useState } from 'react';

interface SectionCreatorProps {
    onCreate: (section: string) => void;
}

const SectionCreator: React.FC<SectionCreatorProps> = ({ onCreate }) => {
    const [newSection, setNewSection] = useState('');

    return (
        <div className="p-4">
            <h2 className="text-xl mb-2">Create a New Section</h2>
            <input
                type="text"
                className="border p-2 rounded w-full"
                placeholder="New Section Name"
                value={newSection}
                onChange={(e) => setNewSection(e.target.value)}
            />
            <button
                className="bg-green-500 text-white px-4 py-2 rounded mt-2"
                onClick={() => {
                    onCreate(newSection);
                    setNewSection('');
                }}
            >
                Create Section
            </button>
        </div>
    );
};

export default SectionCreator;
