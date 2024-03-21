'use client';
import React, {FC} from 'react';
import {PlaygroundActions} from "@/modules/playground/components/playground-actions/PlaygroundActions";
import {PlaygroundEditor} from "@/modules/playground/components/playground-editor/PlaygroundEditor";
import {PlaygroundProvider} from "@/modules/playground/providers/playground.provider";
import {ProblemStatement} from "@/modules/playground/components/playground-problem-statement/ProblemStatement";
import {PlaygroundRunner} from "@/modules/playground/components/playground-runner/PlaygroundRunner";
import {Led} from "@/modules/playground/components/simulated-hardwares/led/Led";
import {NeoPixelMatrix} from "@/modules/playground/components/simulated-hardwares/neopixel-display/NeoPixelMatrix";
import {ServoMotor} from "@/modules/playground/components/simulated-hardwares/servo-motor/ServoMotor";


export const PlayGroundContainer: FC = () => {
    return (
        <PlaygroundProvider>
            <div className={'flex flex-row gap-4  items-center'}>
                <div className={'flex flex-col gap-4 flex-grow'}>
                    <ProblemStatement problem={"Connect two pixels "} description={"Connect two pixels as shown in the image below."}/>
                    <PlaygroundEditor/>
                    <PlaygroundActions/>
                </div>
                <PlaygroundRunner simulatedHardware={<NeoPixelMatrix startingPosition={{row: 5, column: 5}}
                                                                     destinationPosition={{row: 10, column: 10}} matrixSize={11}/>}/>
                <PlaygroundRunner simulatedHardware={<Led/>}/>
                <PlaygroundRunner simulatedHardware={<ServoMotor initialPosition={0} destinationPosition={120}/>}/>

            </div>
        </PlaygroundProvider>
    )
}
