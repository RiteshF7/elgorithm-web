'use client'
import {FC} from 'react';
import {PlayGroundContainer} from "@/modules/playground/components/playground-container/PlaygroundContainer";
import HwPlaygroundConfig from "@/content/banner-main/hw-playground-config";
import {PlaygroundContainerContent} from "@/content/banner-main/playground-container.content";
import {SWPlayGroundContainer} from "@/modules/playground/components/playground-container/swPlaygroundContainer";

const PlayGroundLessonPage: FC<{ params: { playgroundId: string } }> = ({params}) => {

    const projectId = params.playgroundId ?? '0';
    const project = (PlaygroundContainerContent as { [key: string]: any })[projectId];

    return (
        <main className=" bg-black h-full flex flex-col">
            <SWPlayGroundContainer state={project}/>

        </main>
    );
}

export default PlayGroundLessonPage;
