'use client';
import React, {FC} from 'react';
import {PlaygroundEditor} from "@/modules/playground/components/playground-editor/PlaygroundEditor";
import {PlaygroundProvider} from "@/modules/playground/providers/playground.provider";
import {ProblemStatement} from "@/modules/playground/components/playground-problem-statement/ProblemStatement";
import {PlaygroundRunner} from "@/modules/playground/components/playground-runner/PlaygroundRunner";
import {PlaygroundRunnerContent} from "@/content/banner-main/playground-container.content";
import {
    NeoPixelDirect
} from "@/modules/playground/components/simulated-hardwares/components/neopixel-display/NeoPixelDirect";
import {
    ControllerType,
    MatrixType,
    TestCase
} from "@/modules/playground/components/simulated-hardwares/components/neopixel-display/types";


export default interface playgroundContainerProps {

}

export const PlayGroundContainer: FC = () => {



    const one = {
        input: [[5, 5]],
        expectedOutput: [[5, 6]],
    }

    const Two = {
        input: [[5, 5]],
        expectedOutput: [[5, 6], [5, 7], [5, 8]]
    }

    const Three:TestCase = {
        input: [[5, 5], [10, 10]],
        expectedOutput: [
            [[6, 5], [7, 5], [8, 5], [9, 5], [10, 5], [10, 6], [10, 7], [10, 8], [10, 9], [10, 10]],
            [[5, 6], [5, 7], [5, 8], [5, 9], [5, 10], [6, 10], [7, 10], [8, 10], [9, 10], [10, 10]]
        ]


    }

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
                                  simulatedHardware={<NeoPixelDirect controllerType={ControllerType.blocks} testCase={Three} matrixType={MatrixType.BI_DIRECTIONAL} matrixSize={11} />}/>

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
