'use client';
import React, {FC} from 'react';
import {PlaygroundActions} from "@/modules/playground/components/playground-actions/PlaygroundActions";
import {PlaygroundEditor} from "@/modules/playground/components/playground-editor/PlaygroundEditor";
import {PlaygroundProvider} from "@/modules/playground/providers/playground.provider";
import {ProblemStatement} from "@/modules/playground/components/playground-problem-statement/ProblemStatement";
import {PlaygrountContent} from "@/content/banner-main/playgrount-content";


export interface PlayGroundContainerProps {
    PlaygroundRunner: React.ReactNode;
    problemQuestion: string
    problemDescription: string
    problemAnimations: string[]
    problemImages: string[]
    problemVideos: string[]
    isProcodeNeeded: boolean
    nextProblemId: string
    prevProblemId: string
    isCompleted: boolean
    skippable: boolean
    workspace: Workspace
    code: Code
}

export interface Workspace {
    blocksArray: string[]
    enableScroll: boolean
    enableZoom: boolean
    width: number
    height: number
    toolboxOrientation: string
}

export interface Code {
    comparison: Comparison[]
    hint: Hint
}

export interface Comparison {
    code: string
    message: string
    isCorrect: boolean
}

export interface Hint {
    heading: string
    description: string
    imageUrls: string[]
    videoUrls: string[]
    animationUrls: string[]
}


export const PlayGroundContainer: FC<PlayGroundContainerProps> = ({PlaygroundRunner}) => {
    return (
        <PlaygroundProvider>
            <div className={'flex flex-row gap-4  items-center'}>
                {PlaygroundRunner}
                <div className={'flex flex-col gap-4 flex-grow'}>
                    <ProblemStatement problem={"some ques"} description={"some ques description"}/>
                    <PlaygroundEditor/>
                    <PlaygroundActions/>
                </div>

            </div>
        </PlaygroundProvider>
    )
}
