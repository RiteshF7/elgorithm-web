'use client'
import React, { useState, useEffect } from 'react';

interface DropdownOptions {
    [key: string]: string[];
}

interface TextInputFormProps {
    keys: string[];
    dropdownOptions?: DropdownOptions;
    initialData?: Record<string, any>;
    onSubmit: (data: Record<string, any>) => void;
}

const TextInputForm: React.FC<TextInputFormProps> = ({ keys, dropdownOptions, initialData, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>(initialData || {});

    useEffect(() => {
        setFormData(initialData || {});
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        const keys = name.split('.');
        let updatedData = { ...formData };

        let currentLevel = updatedData;
        for (let i = 0; i < keys.length - 1; i++) {
            currentLevel = currentLevel[keys[i]];
        }

        currentLevel[keys[keys.length - 1]] = value;
        setFormData(updatedData);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const renderInputs = (obj: Record<string, any>, parentKey = ''): JSX.Element[] => {
        return Object.keys(obj).flatMap((key) => {
            const newKey = parentKey ? `${parentKey}.${key}` : key;

            if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                return renderInputs(obj[key], newKey);
            } else {
                return (
                    <div key={newKey} className="form-group">
                        <label htmlFor={newKey} className="block text-sm font-medium text-gray-700">{newKey}</label>
                        {dropdownOptions && dropdownOptions[newKey] ? (
                            <select
                                id={newKey}
                                name={newKey}
                                value={obj[key] || ''}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                {dropdownOptions[newKey].map(option => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <input
                                type="text"
                                id={newKey}
                                name={newKey}
                                value={obj[key] || ''}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        )}
                    </div>
                );
            }
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {renderInputs(formData)}
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Submit</button>
        </form>
    );
};


interface Module {
    content: {
        title: string;
        description: string;
        media: Array<{
            type: string;
            url: string;
            caption: string;
        }>;
    };
    editorConfig: {
        toolboxType: string;
        toolboxContent: string[];
    };
    runnerConfig: {
        moduleName: string;
        moduleConfig: {
            matrixSize: number;
            matrixType: string;
            testCase: {
                initialState: number[][];
                expectedOutput: number[][];
            };
            controllerType: string;
        };
    };
}

const moduleData: Module = {
    content: {
        title: "Move pixel 1 step left",
        description: "Move pixel 1 step left",
        media: [
            {
                type: "video",
                url: "",
                caption: ""
            }
        ]
    },
    editorConfig: {
        toolboxType: "flyoutToolbox",
        toolboxContent: ["BlockKeys.moveLeft"]
    },
    runnerConfig: {
        moduleName: "Modules.NeoPixelModule",
        moduleConfig: {
            matrixSize: 11,
            matrixType: "MatrixType.UNI_DIRECTIONAL",
            testCase: {
                initialState: [[5, 5]],
                expectedOutput: [[5, 4]]
            },
            controllerType: "ControllerType.blocks"
        }
    }
};

const ModuleBuilder: React.FC = () => {
    const handleFormSubmit = (data: Record<string, any>) => {
        console.log('Form Data:', data);
        alert(JSON.stringify(data, null, 2)); // Display the result in an alert
    };

    const getKeys = (obj: Record<string, any>, parentKey = ''): string[] => {
        return Object.keys(obj).reduce((acc: string[], key: string) => {
            const newKey = parentKey ? `${parentKey}.${key}` : key;
            if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                acc.push(...getKeys(obj[key], newKey));
            } else {
                acc.push(newKey);
            }
            return acc;
        }, []);
    };

    const keys = getKeys(moduleData);

    return (
        <div className="App max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-5">Dynamic Form Builder</h1>
            <TextInputForm
                keys={keys}
                initialData={moduleData}
                onSubmit={handleFormSubmit}
            />
        </div>
    );
};

export default ModuleBuilder;
