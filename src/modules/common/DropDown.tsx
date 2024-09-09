import React, { useState, ChangeEvent } from "react";

export default function Dropdown() {
    const [selectedOption, setSelectedOption] = useState<string>("");

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="flex justify-center ">
            <div className="relative">
                <select
                    value={selectedOption}
                    onChange={handleSelectChange}
                    className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                    <option value="" disabled>
                        Select a device
                    </option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M5.5 7l4.5 4 4.5-4H5.5z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
