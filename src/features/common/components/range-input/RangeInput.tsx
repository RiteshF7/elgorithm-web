import React, { useState, useEffect } from 'react';

interface AutoRangeInputProps {
    min: number;
    max: number;
    delay: number;
    value: number;
    onChange: (value: number) => void;
}

export const AutoRangeInput: React.FC<AutoRangeInputProps> = ({ min, max, delay, value, onChange }) => {
    useEffect(() => {
        const interval = setInterval(() => {
            // Incrementing the value until it reaches max
            if (value < max) {
                onChange(value + 1);
            }
        }, delay);

        return () => clearInterval(interval);
    }, [value, max, delay, onChange]);

    return (
        <input
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={(e) => onChange(parseInt(e.target.value))}
        />
    );
};


