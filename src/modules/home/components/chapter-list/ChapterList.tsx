import { FC, useEffect, useState } from 'react';
import { fetchAllStages } from '@/repositories/stageRepo';
import Link from 'next/link';

interface Stage {
    ref: {
        id: string;
    };
    data: {
        name: string;
        description: string;
    };
}

export const ChapterList: FC = () => {
    const [stages, setStages] = useState<Stage[]>([]);

    useEffect(() => {
        const getStages = async () => {
            const allStages = await fetchAllStages();
            setStages(allStages as Stage[]);
        };
        getStages();
    }, []);

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Chapters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {stages.map((stage) => (
                    <Link href={`/stages/${stage.ref.id}`} key={stage.ref.id}>
                        <div className="block p-4 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer">
                            <h3 className="text-lg font-semibold">{stage.data.name}</h3>
                            <p className="text-gray-600">{stage.data.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
