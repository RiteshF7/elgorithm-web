'use client'
import { FC } from 'react';
import { PlayGroundContainer } from "@/modules/playground/components/playground-container/PlaygroundContainer";
import HwPlaygroundConfig from "@/content/banner-main/hw-playground-config";

const PlayGroundLessonPage: FC<{ params: { playgroundId: string } }> = ({ params }) => {

    const projectId = params.playgroundId ?? '0';
    const project = (HwPlaygroundConfig as { [key: string]: any })[projectId];

    return (
        <main className="flex flex-col">
            <PlayGroundContainer state={project} />
        </main>
    );
}

export default PlayGroundLessonPage;
