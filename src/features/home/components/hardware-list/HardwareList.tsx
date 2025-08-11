import { FC, useEffect, useState } from 'react';
import { fetchAllModules } from '@/repositories/moduleRepo';
import Link from 'next/link';

interface Module {
    ref: {
        id: string;
    };
    data: {
        name: string;
        description: string;
    };
}

export const HardwareList: FC = () => {
    const [modules, setModules] = useState<Module[]>([]);

    useEffect(() => {
        const getModules = async () => {
            const allModules = await fetchAllModules();
            setModules(allModules as Module[]);
        };
        getModules();
    }, []);

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mt-8">
            <h2 className="text-2xl font-bold mb-4">Virtual Hardware</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {modules.map((module) => (
                    <Link href={`/modules/${module.ref.id}`} key={module.ref.id}>
                        <div className="block p-4 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer">
                            <h3 className="text-lg font-semibold">{module.data.name}</h3>
                            <p className="text-gray-600">{module.data.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
