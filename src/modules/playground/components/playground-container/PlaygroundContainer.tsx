'use client';
import React, {FC} from 'react';
import {PlaygroundEditor} from "@/modules/playground/components/playground-editor/PlaygroundEditor";
import {PlaygroundProvider} from "@/modules/playground/providers/playground.provider";
import {ProblemStatement} from "@/modules/playground/components/playground-problem-statement/ProblemStatement";
import {PlaygroundContainerContent} from "@/content/banner-main/playground-container.content";
import {PlaygroundRunner} from "@/modules/playground/components/playground-runner/PlaygroundRunner";


export const PlayGroundContainer: FC = () => {

    const playgroundContainerConfig = PlaygroundContainerContent[8]


    return (
        <PlaygroundProvider>
            <div className={'flex flex-row gap-4  items-center'}>
                <div className={'flex flex-col gap-4 flex-grow'}>
                    <ProblemStatement problem={playgroundContainerConfig.content.title}
                                      description={playgroundContainerConfig.content.description}/>
                    <PlaygroundEditor editorConfig={playgroundContainerConfig.editorConfig}/>
                </div>
                <PlaygroundRunner runnerConfig={playgroundContainerConfig.runnerConfig}/>
            </div>
        </PlaygroundProvider>
    )
}
