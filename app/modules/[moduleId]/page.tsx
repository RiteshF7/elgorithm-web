'use client'
import { FC, useEffect, useState } from 'react';
import { fetchModuleById } from '@/repositories/moduleRepo';
import Link from 'next/link';
import { Header } from '@/features/common/components/header/Header';

interface Module {
    ref: {
        id: string;
    };
    data: {
        name: string;
        description: string;
    };
}

const ModulePage: FC<{ params: { moduleId: string } }> = ({ params }) => {
    const [module, setModule] = useState<Module | null>(null);
    const { moduleId } = params;

    useEffect(() => {
        if (moduleId) {
            const getModule = async () => {
                const moduleData = await fetchModuleById(moduleId);
                setModule(moduleData as Module);
            };
            getModule();
        }
    }, [moduleId]);

    if (!module) {
        return <div>Loading...</div>;
    }

    return (
        <main className={'flex flex-col overflow-y-auto max-w-desktop px-2 py-4 mx-auto gap-12'}>
            <Header/>
            <div className={'mt-20'}>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">{module.data.name}</h2>
                    <p className="text-gray-600 mb-4">{module.data.description}</p>
                    <Link href={`/hardware-playground/${moduleId}`}>
                        <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Continue
                        </p>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default ModulePage;
