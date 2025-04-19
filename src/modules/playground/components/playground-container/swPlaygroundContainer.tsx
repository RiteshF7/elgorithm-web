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
            <div className="h-screen bg-gray-800 flex items-center justify-center ">
                {/*<div className="flex-1 p-4">*/}
                {/*    <ProblemStatement*/}
                {/*        problem={containerState.content.title}*/}
                {/*        description={containerState.content.description}*/}
                {/*    />*/}
                {/*    <div className="mt-4">*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<PlaygroundEditor editorConfig={containerState.editorConfig}/>*/}

                {/*<PlaygroundRunner runnerConfig={containerState.runnerConfig}/>*/}
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <NeoPixelPlayground state={containerState}/>

            </div>
        </PlaygroundProvider>
    );
};