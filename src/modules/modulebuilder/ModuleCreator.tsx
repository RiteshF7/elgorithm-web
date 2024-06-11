'use client'
import React, { useState } from 'react';
import JsonEditorWrapper from './JsonEditorWrapper';

interface ModuleCreatorProps {
    onCreate: (module: any) => void;
}

const ModuleCreator: React.FC<ModuleCreatorProps> = ({ onCreate }) => {
    const [moduleName, setModuleName] = useState('');
    const [playgroundJson, setPlaygroundJson] = useState({});

    return (
        <div className="p-4">
            <h2 className="text-xl mb-2">Create a New Module</h2>
            <input
                type="text"
                className="border p-2 rounded w-full"
                placeholder="Module Name"
                value={moduleName}
                onChange={(e) => setModuleName(e.target.value)}
            />
            <JsonEditorWrapper json={playgroundJson} onChange={setPlaygroundJson} />
            <button
                className="bg-red-500 text-white px-4 py-2 rounded mt-2"
                onClick={() => onCreate({ moduleName, playgroundJson })}
            >
                Create Module
            </button>
        </div>
    );
};

export default ModuleCreator;
