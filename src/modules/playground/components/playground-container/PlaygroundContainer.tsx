'use client';
import React, {FC} from 'react';
import {PlaygroundEditor} from "@/modules/playground/components/playground-editor/PlaygroundEditor";
import {PlaygroundProvider} from "@/modules/playground/providers/playground.provider";
import {ProblemStatement} from "@/modules/playground/components/playground-problem-statement/ProblemStatement";
import {PlaygroundRunner} from "@/modules/playground/components/playground-runner/PlaygroundRunner";
import {PlaygroundContainerContent, PlaygroundRunnerContent} from "@/content/banner-main/playground-container.content";
import {getModule} from "@/modules/playground/components/simulated-hardwares/modulesMap";


export const PlayGroundContainer: FC = () => {

    const playgroundContainerConfig = PlaygroundContainerContent[0]


    return (
        <PlaygroundProvider>
            <div className={'flex flex-row gap-4  items-center'}>
                <div className={'flex flex-col gap-4 flex-grow'}>
                    <ProblemStatement problem={playgroundContainerConfig.question}
                                      description={playgroundContainerConfig.description}/>
                    <PlaygroundEditor/>
                </div>

                {getModule(playgroundContainerConfig.runnerConfig.moduleName, playgroundContainerConfig.runnerConfig.moduleConfig)}

                <div className={'flex flex-col gap-4 items-center flex-grow'}>

                    {/*<PlaygroundRunner*/}
                    {/*    runnerConfig={PlaygroundRunnerContent[2]}*/}
                    {/*    simulatedHardware={<LedWrapper/>}*/}
                    {/*/>*/}
                    {/*<PlaygroundActions/>*/}

                </div>
                {/*<PlaygroundRunner simulatedHardware={<ServoMotor initialPosition={{degree:0}} destinationPosition={{degree:90}}/>}/>*/}
                {/*<PlaygroundRunner                          runnerConfig={PlaygroundRunnerContent[2]}*/}
                {/*                                           simulatedHardware={<Test/>}/>*/}
                {/*/!*<PlaygroundRunner runnerConfig={PlaygroundRunnerContent[0]} simulatedHardware={<Buzzer  initialState={{state:false}} desiredState={{state:true}}/>}/>*!/*/}

            </div>
        </PlaygroundProvider>
    )
}
