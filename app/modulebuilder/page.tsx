// components/NewPlaygroundForm.tsx
'use client'
import React, { useState } from 'react';
import { NextApiRequest } from 'next';
import {PlaygroundContainerContent} from "@/content/banner-main/playground-container.content";

const NewPlaygroundForm: React.FC = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:3008/api/playground', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(PlaygroundContainerContent[0]),
            });

            if (!res.ok) {
                throw new Error('Failed to create playground');
            }

            alert('Playground created successfully!');
            // Reset form fields after successful submission
            setName('');
            setLocation('');
        } catch (error) {
            console.error('Error creating playground:', error);
            alert('Failed to create playground');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Location:
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
            </label>
            <button type="submit">Create Playground</button>
        </form>
    );
};

export default NewPlaygroundForm;
