'use client'
import { FC } from 'react';
import { PlayGroundContainer } from "@/modules/playground/components/playground-container/PlaygroundContainer";
import {PlaygroundContainerContent} from "@/content/banner-main/playground-container.content";
import {useParams} from "next/navigation";


const PlayGroundLessonPage:FC<{ params: { playgroundId: string } }> = ({ params })=> {


    console.log(params,"some val:::")
    return (
        <main className={'flex flex-col overflow-y-auto max-w-desktop px-2 py-4 mx-auto gap-12'}>
        <div className={'p-4'}>
        <PlayGroundContainer state={PlaygroundContainerContent[parseInt(params.playgroundId)]} />
    </div>
    </main >
)
}

export default PlayGroundLessonPage;
