'use client';
import React, {FC} from 'react';
import {PlaygroundEditor} from "@/modules/playground/components/playground-editor/PlaygroundEditor";
import {PlaygroundProvider} from "@/modules/playground/providers/playground.provider";
import {ProblemStatement} from "@/modules/playground/components/playground-problem-statement/ProblemStatement";
import {PlaygroundRunner} from "@/modules/playground/components/playground-runner/PlaygroundRunner";
import {NeoPixelPlayground} from "@/modules/playground/components/playground-container/SoftPlaygroundContainer";

export interface PlaygroundState {
    state: any;
}

export const SWPlayGroundContainer: FC<PlaygroundState> = ({state}) => {
    const [containerState, setContainerState] = React.useState(state);

    return (
        <PlaygroundProvider>
            <div className=" flex-col items-center justify-center ">
                <NeoPixelPlayground state={containerState}/>
            </div>
        </PlaygroundProvider>
    );
};