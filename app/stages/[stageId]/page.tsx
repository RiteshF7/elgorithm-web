'use client'
import { FC, useEffect, useState } from 'react';
import { fetchSectionsByStage } from '@/repositories/sectionRepo';
import Link from 'next/link';
import { Header } from '@/features/common/components/header/Header';

interface Section {
    ref: {
        id: string;
    };
    data: {
        name: string;
        description: string;
    };
}

const StagePage: FC<{ params: { stageId:string } }> = ({ params }) => {
    const [sections, setSections] = useState<Section[]>([]);
    const { stageId } = params;

    useEffect(() => {
        if (stageId) {
            const getSections = async () => {
                const allSections = await fetchSectionsByStage(stageId);
                setSections(allSections as Section[]);
            };
            getSections();
        }
    }, [stageId]);

    return (
        <main className={'flex flex-col overflow-y-auto max-w-desktop px-2 py-4 mx-auto gap-12'}>
            <Header/>
            <div className={'mt-20'}>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">Lessons</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {sections.map((section) => (
                            <Link href={`/course/${stageId}/${section.ref.id}`} key={section.ref.id}>
                                <div className="block p-4 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer">
                                    <h3 className="text-lg font-semibold">{section.data.name}</h3>
                                    <p className="text-gray-600">{section.data.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default StagePage;
