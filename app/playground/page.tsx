'use client'
import { FC } from 'react';
import { PlayGroundContainer } from "@/modules/playground/components/playground-container/PlaygroundContainer";
import {PlaygroundContainerContent} from "@/content/banner-main/playground-container.content";
import {useParams} from "next/navigation";


const PlayGroundPage: FC = () => {

    const { id } = useParams<{ id?: string }>();
    const idValue = parseInt(id ?? '0', 10) || 0;

    console.log(id,"some val:::")
    return (
        <main className={'flex flex-col overflow-y-auto max-w-desktop px-2 py-4 mx-auto gap-12'}>
            <div className={'p-4'}>
                <PlayGroundContainer state={PlaygroundContainerContent[idValue]} />
            </div>
        </main >
    )
}

export default PlayGroundPage;
