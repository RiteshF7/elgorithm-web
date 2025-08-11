'use client'
import { FC, useEffect, useState } from 'react';
import { fetchModuleById } from '@/repositories/moduleRepo';
import { Header } from '@/features/common/components/header/Header';
import { PlayGroundContainer } from '@/features/playground/components/playground-container/PlaygroundContainer';
import { hardwareMap } from '@/features/playground/hardware-map';

interface Module {
    ref: {
        id: string;
    };
    data: {
        name: string;
        description: string;
    };
}

const HardwarePlaygroundPage: FC<{ params: { moduleId: string } }> = ({ params }) => {
    const [playgroundState, setPlaygroundState] = useState<any>(null);
    const { moduleId } = params;

    useEffect(() => {
        if (moduleId && hardwareMap[moduleId]) {
            const { module, blockConfig } = hardwareMap[moduleId];
            const toolboxContent = blockConfig ? blockConfig.toolBox : [];

            setPlaygroundState({
                content: {
                    title: `Play with ${moduleId}`,
                    description: `This is a free playground for the ${moduleId}.`,
                },
                editorConfig: {
                    toolboxType: 'flyoutToolbox',
                    toolboxContent: toolboxContent,
                },
                runnerConfig: {
                    moduleName: module,
                    moduleConfig: {},
                },
            });
        }
    }, [moduleId]);

    if (!playgroundState) {
        return <div>Loading...</div>;
    }

    return (
        <main className={'flex flex-col overflow-y-auto max-w-desktop px-2 py-4 mx-auto gap-12'}>
            <Header/>
            <div className={'mt-20'}>
                <PlayGroundContainer state={playgroundState} />
            </div>
        </main>
    );
};

export default HardwarePlaygroundPage;
