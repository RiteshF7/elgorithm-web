'use client'
import React, { useState } from 'react';

interface DropdownOptions {
    [key: string]: string[];
}

interface TextInputFormProps {
    keys: string[];
    dropdownOptions?: DropdownOptions;
}

const TextInputForm: React.FC<TextInputFormProps> = ({ keys, dropdownOptions }) => {
    const [formData, setFormData] = useState(() => {
        const initialData: Record<string, string> = {};
        keys.forEach(key => {
            initialData[key] = '';
        });
        return initialData;
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData); // This will log the map of key and values
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {keys.map((key) => (
                <div key={key} className="form-group">
                    <label htmlFor={key} className="block text-sm font-medium text-gray-700">{key}</label>
                    {dropdownOptions && dropdownOptions[key] ? (
                        <select
                            id={key}
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            {dropdownOptions[key].map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    ) : (
                        <input
                            type="text"
                            id={key}
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    )}
                </div>
            ))}
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Submit</button>
        </form>
    );
};



const ModuleBuilder: React.FC = () => {

    const [keys, setKeys] = useState(['name', 'email', 'phone']);
    const dropdownOptions = {
        name: ['USA', 'Canada', 'UK', 'Australia'],
    };
    return (
        <div className="App max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-5">Dynamic Form</h1>
            {/*<Button uiType={'primary'} onClick={() => {*/}
            {/*    setKeys(['moduleName','block keys'])*/}

            {/*}}>NeoPixel</Button>*/}
            <TextInputForm keys={keys} dropdownOptions={dropdownOptions}/>
        </div>
    );
}

export default ModuleBuilder;
