'use client';
import React, {FC} from 'react';
import {PlaygroundActions} from "@/modules/playground/components/playground-actions/PlaygroundActions";
import {PlaygroundEditor} from "@/modules/playground/components/playground-editor/PlaygroundEditor";
import {PlaygroundProvider} from "@/modules/playground/providers/playground.provider";
import {ProblemStatement} from "@/modules/playground/components/playground-problem-statement/ProblemStatement";
import {PlaygrountContent} from "@/content/banner-main/playgrount-content";

export interface PlayGroundContainerProps {
    PlaygroundRunner: React.ReactNode;
}

export const PlayGroundContainer: FC<PlayGroundContainerProps> = ({PlaygroundRunner}) => {
    return (
        <PlaygroundProvider>
            <div className={'flex flex-col gap-4  items-center'}>
                <div className={'flex flex-col gap-4 flex-grow'}>
                    <ProblemStatement problem={"some ques"} description={"some ques description"}/>
                    <PlaygroundEditor/>
                    <PlaygroundActions/>
                </div>

            </div>
        </PlaygroundProvider>
    )
}
