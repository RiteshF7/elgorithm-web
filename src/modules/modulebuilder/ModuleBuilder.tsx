'use client'
import React, { useState, useEffect } from 'react';

interface TextInputFormProps {
    keys: string[];
    initialData?: Record<string, any>;
    options?: Record<string, string[]>; // New property for dropdown options
    integerKeys?: string[]; // New property for integer value keys
    onSubmit: (data: Record<string, any>) => void;
}

const TextInputForm: React.FC<TextInputFormProps> = ({ keys, initialData, options, integerKeys, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>(initialData || {});

    useEffect(() => {
        setFormData(initialData || {});
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleArrayChange = (key: string, index: number, value: any) => {
        setFormData((prevData) => {
            const updatedArray = [...(prevData[key] || [])];
            updatedArray[index] = value;
            return { ...prevData, [key]: updatedArray };
        });
    };

    const handleArrayAdd = (key: string) => {
        setFormData((prevData) => {
            const updatedArray = [...(prevData[key] || []), ''];
            return { ...prevData, [key]: updatedArray };
        });
    };

    const handleArrayRemove = (key: string, index: number) => {
        setFormData((prevData) => {
            const updatedArray = [...(prevData[key] || [])];
            updatedArray.splice(index, 1);
            return { ...prevData, [key]: updatedArray };
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const renderInputs = (keys: string[]): JSX.Element[] => {
        return keys.map((key) => {
            const value = formData[key];
            if (Array.isArray(value)) {
                return (
                    <div key={key} className="form-group">
                        <label className="block text-sm font-medium text-gray-700">{key}</label>
                        {value.map((item, index) => (
                            <div key={`${key}.${index}`} className="flex items-center space-x-2">
                                <input
                                    type="text"
                                    value={item}
                                    onChange={(e) => handleArrayChange(key, index, e.target.value)}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleArrayRemove(key, index)}
                                    className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => handleArrayAdd(key)}
                            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 mt-2"
                        >
                            Add Item
                        </button>
                    </div>
                );
            } else if (options && options[key]) {
                return (
                    <div key={key} className="form-group">
                        <label htmlFor={key} className="block text-sm font-medium text-gray-700">{key}</label>
                        <select
                            id={key}
                            name={key}
                            value={value || ''}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            {options[key].map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>
                    </div>
                );
            } else if (integerKeys && integerKeys.includes(key)) {
                return (
                    <div key={key} className="form-group">
                        <label htmlFor={key} className="block text-sm font-medium text-gray-700">{key}</label>
                        <input
                            type="number" // Change input type to 'number'
                            id={key}
                            name={key}
                            value={value || ''}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                );
            } else {
                return (
                    <div key={key} className="form-group">
                        <label htmlFor={key} className="block text-sm font-medium text-gray-700">{key}</label>
                        <input
                            type="text"
                            id={key}
                            name={key}
                            value={value || ''}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                );
            }
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 w-4/5 mx-auto">
            {renderInputs(keys)}
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Submit</button>
        </form>
    );
};

const ModuleBuilder: React.FC = () => {
    const initialData ={
        chapterId: null,
        type: null,
        contentContentId: null,
        contentTitle: null,
        contentDescription: null,
        contentMediaType: null,
        contentMediaUrl: null,
        contentMediaCaption: null,
        editorConfigToolboxType: null,
        editorConfigToolboxContent: null,
        runnerConfigModuleName: null,
        runnerConfigModuleConfigMatrixSize: null,
        runnerConfigModuleConfigMatrixType: null,
        runnerConfigModuleConfigTestCaseInitialState: [[5,5],[5,4],[5,4]],
        runnerConfigModuleConfigTestCaseExpectedOutput: null,
        runnerConfigModuleConfigControllerType: null
    };



    const keys = [
        "chapterId",
        "type",
        "contentContentId",
        "contentTitle",
        "contentDescription",
        "contentMediaType",
        "contentMediaUrl",
        "contentMediaCaption",
        "editorConfigToolboxType",
        "editorConfigToolboxContent",
        "runnerConfigModuleName",
        "runnerConfigModuleConfigMatrixSize",
        "runnerConfigModuleConfigMatrixType",
        "runnerConfigModuleConfigTestCaseInitialState",
        "runnerConfigModuleConfigTestCaseExpectedOutput",
        "runnerConfigModuleConfigControllerType"
    ]


    const options = {
        runnerConfigModuleConfigControllerType: ["Blocks", "Code"], // Dropdown options for 'category'
    };

    const integerKeys = ['quantity']; // Added 'quantity' to integerKeys

    const handleFormSubmit = (data: Record<string, any>) => {
        console.log('Form Data:', data);
        alert(JSON.stringify(data, null, 2)); // Display the result in an alert
    };

    return (
        <div className="App w-full p-4 ">
            <h1 className="text-2xl font-bold mb-5">Dynamic Form Builder</h1>
            <TextInputForm
                keys={keys}
                initialData={initialData}
                options={options} // Pass options to the form component
                integerKeys={integerKeys} // Pass integerKeys to the form component
                onSubmit={handleFormSubmit}
            />
        </div>
    );
};

export default ModuleBuilder;
