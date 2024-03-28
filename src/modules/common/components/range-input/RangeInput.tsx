import React, { ChangeEvent } from 'react';

interface RangeInputProps {
    min: number;
    max: number;
    step?: number;
    value: number;
    onChange: (value: number) => void;
}

const RangeInput: React.FC<RangeInputProps> = ({ min, max, step = 1, value, onChange }) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(Number(event.target.value));
    };

    return (
        <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={handleChange}
            className="w-full h-4 rounded-lg appearance-none bg-gray-300 cursor-pointer"
        />
    );
};

export default RangeInput;
