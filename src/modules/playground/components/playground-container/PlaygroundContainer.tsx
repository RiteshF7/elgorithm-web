'use client';
import React, {FC} from 'react';
import {PlaygroundEditor} from "@/modules/playground/components/playground-editor/PlaygroundEditor";
import {PlaygroundProvider} from "@/modules/playground/providers/playground.provider";
import {ProblemStatement} from "@/modules/playground/components/playground-problem-statement/ProblemStatement";
import {PlaygroundRunner} from "@/modules/playground/components/playground-runner/PlaygroundRunner";
import {PlaygroundRunnerContent} from "@/content/banner-main/playground-container.content";
import {
    MatrixType,
    NeoPixelDirect
} from "@/modules/playground/components/simulated-hardwares/components/neopixel-display/NeoPixelDirect";


export default interface playgroundContainerProps {

}

export const PlayGroundContainer: FC = () => {

    return (
        <PlaygroundProvider>
            <div className={'flex flex-row gap-4  items-center'}>
                <div className={'flex flex-col gap-4 flex-grow'}>
                    <ProblemStatement problem={"Connect two pixels "}
                                      description={"Connect two pixels as shown in the image below."}/>
                    <PlaygroundEditor/>
                </div>
                {/*<PlaygroundRunner simulatedHardware={<NeoPixelMatrix startingPosition={{row: 5, column: 5}}*/}
                {/*                                                     destinationPosition={{row: 10, column: 10}} matrixSize={11}/>}/>*/}
                <PlaygroundRunner runnerConfig={PlaygroundRunnerContent[0]}
                                  simulatedHardware={<NeoPixelDirect matrixType={MatrixType.BI_DIRECTIONAL} matrixSize={11} />}/>

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
