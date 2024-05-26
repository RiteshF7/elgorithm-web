'use client';
import React, {FC} from 'react';
import {PlaygroundEditor} from "@/modules/playground/components/playground-editor/PlaygroundEditor";
import {PlaygroundProvider} from "@/modules/playground/providers/playground.provider";
import {ProblemStatement} from "@/modules/playground/components/playground-problem-statement/ProblemStatement";
import {PlaygroundContainerContent} from "@/content/banner-main/playground-container.content";
import {PlaygroundRunner} from "@/modules/playground/components/playground-runner/PlaygroundRunner";
import {Button} from "@/modules/common/components/button/Button";
import {LCD} from "@/modules/playground/components/simulated-hardwares/modules/LCD/LCD";
import {getLevelList} from "@/database/fauna-db";


export const PlayGroundContainer: FC = () => {

    const [containerState, setContainerState] = React.useState(PlaygroundContainerContent[14])

    return (
        <PlaygroundProvider>
            <div className={'flex flex-row gap-4  items-center'}>
                <div className={'flex flex-col gap-4 flex-grow'}>
                    <ProblemStatement problem={containerState.content.title}
                                      description={containerState.content.description}/>
                    <PlaygroundEditor editorConfig={containerState.editorConfig}/>
                </div>
                <PlaygroundRunner runnerConfig={containerState.runnerConfig}/>
            </div>
            <Button onClick={async () => {
                // setContainerState(PlaygroundContainerContent[containerState.chapterId + 1])
                // getLevelList().then(r => console.log(r)).catch(e => console.log(e));
                const BASE_URL = process.env.API_ENDPOINT;

                const result = await fetch(`/api/category/list?detailed=true`)
                console.log(result.json())

            }} uiType={'primary'}>NEXT</Button>
        </PlaygroundProvider>
    )
}
