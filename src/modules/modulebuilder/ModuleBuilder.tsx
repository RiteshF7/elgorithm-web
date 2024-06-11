'use client'
import React, { useState } from 'react';
import JsonEditor from '@/modules/modulebuilder/JsonEditor';
import { ledSchema, neoPixelDisplaySchema } from '@/modules/modulebuilder/moduleSchemas';
import { Modules } from '@/modules/playground/components/simulated-hardwares/utils/modulesMap';
import 'tailwindcss/tailwind.css';

const ModuleBuilder: React.FC = () => {
    const [json, setJson] = useState({});

    const onSave = (newJson: any) => {
        console.log('Saved JSON:', newJson);

    };

    const onChange = (moduleName: Modules) => {
        switch (moduleName) {
            case Modules.NeoPixelModule:
                setJson(neoPixelDisplaySchema);
                break;
            case Modules.LedModule:
                setJson(ledSchema);
                break;
            default:
                setJson({});
                break;
        }
    };

    return (
        <div className="flex flex-col items-center p-4">
            <div className="flex space-x-4 mb-4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => onChange(Modules.NeoPixelModule)}
                >
                    NeoPixel
                </button>
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    onClick={() => onChange(Modules.LedModule)}
                >
                    LED
                </button>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Servo
                </button>
                <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                    Buzzer
                </button>
            </div>

            <JsonEditor inputJson={json} onSave={onSave} />
        </div>
    );
};

export default ModuleBuilder;
