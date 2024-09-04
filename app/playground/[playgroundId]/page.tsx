'use client'
import { FC } from 'react';
import { PlayGroundContainer } from "@/modules/playground/components/playground-container/PlaygroundContainer";
import {PlaygroundContainerContent} from "@/content/banner-main/playground-container.content";
import {useParams} from "next/navigation";


const PlayGroundLessonPage:FC<{ params: { playgroundId: string } }> = ({ params })=> {


    return (

            <main className="flex flex-col  ">
                <PlayGroundContainer state={PlaygroundContainerContent[parseInt(params.playgroundId)]}/>
            </main>
    )
}

export default PlayGroundLessonPage;
