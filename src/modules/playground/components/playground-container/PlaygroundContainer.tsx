'use client';
import React, {FC} from 'react';
import {PlaygroundActions} from "@/modules/playground/components/playground-actions/PlaygroundActions";
import {PlaygroundEditor} from "@/modules/playground/components/playground-editor/PlaygroundEditor";
import {PlaygroundRunner} from "@/modules/playground/components/playground-runner/PlaygroundRunner";
import {PlaygroundProvider} from "@/modules/playground/providers/playground.provider";
import {ProblemStatement} from "@/modules/playground/components/playground-problem-statement/ProblemStatement";
import {PlaygrountContent} from "@/content/banner-main/playgrount-content";

export interface PlayGroundContainerProps {
    PlaygroundRunner: React.ReactNode;
}

export const PlayGroundContainer: FC<PlayGroundContainerProps> = ({PlaygroundRunner}) => {
    return (
        <PlaygroundProvider>
            <div className={'flex flex-col gap-4'}>
                <ProblemStatement problem={PlaygrountContent.problem} description={PlaygrountContent.description}/>
                <div className={'flex gap-4 border-1 border-gray-500 rounded-lg'}>
                    <PlaygroundEditor/>
                    {PlaygroundRunner}
                </div>
                <PlaygroundActions/>

            </div>
        </PlaygroundProvider>
    )
}
