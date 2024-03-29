'use client';
import React, {FC} from 'react';
import {PlaygroundActions} from "@/modules/playground/components/playground-actions/PlaygroundActions";
import {PlaygroundEditor} from "@/modules/playground/components/playground-editor/PlaygroundEditor";
import {PlaygroundProvider} from "@/modules/playground/providers/playground.provider";
import {ProblemStatement} from "@/modules/playground/components/playground-problem-statement/ProblemStatement";
import {PlaygroundRunner} from "@/modules/playground/components/playground-runner/PlaygroundRunner";
import {Led} from "@/modules/playground/components/simulated-hardwares/components/led/Led";
import {
    NeoPixelMatrix
} from "@/modules/playground/components/simulated-hardwares/components/neopixel-display/NeoPixelMatrix";
import {ServoMotor} from "@/modules/playground/components/simulated-hardwares/components/servo-motor/ServoMotor";
import {LightSensor} from "@/modules/playground/components/simulated-hardwares/components/light-sensor/LightSensor";
import {Buzzer} from "@/modules/playground/components/simulated-hardwares/components/buzzer/Buzzer";
import {LedWrapper} from "@/modules/playground/components/simulated-hardwares/components/led/LedWrapper";
import {PlaygroundRunnerContent} from "@/content/banner-main/playground-container.content";




export const PlayGroundContainer: FC = ({}) => {

    return (
        <PlaygroundProvider>
            <div className={'flex flex-row gap-4  items-center'}>
                <div className={'flex flex-col gap-4 flex-grow'}>
                    <ProblemStatement problem={"Connect two pixels "}
                                      description={"Connect two pixels as shown in the image below."}/>
                    <PlaygroundEditor/>
                    <PlaygroundActions/>
                </div>
                {/*<PlaygroundRunner simulatedHardware={<NeoPixelMatrix startingPosition={{row: 5, column: 5}}*/}
                {/*                                                     destinationPosition={{row: 10, column: 10}} matrixSize={11}/>}/>*/}

                <PlaygroundRunner
                runnerConfig={PlaygroundRunnerContent}
                simulatedHardware={<LedWrapper/>}
                />
                {/*<PlaygroundRunner simulatedHardware={<ServoMotor initialPosition={{degree:0}} destinationPosition={{degree:90}}/>}/>*/}
                {/*<PlaygroundRunner simulatedHardware={<LightSensor/>}/>*/}
                {/*<PlaygroundRunner simulatedHardware={<Buzzer initialState={{state:false}} desiredState={{state:true}}/>}/>*/}

            </div>
        </PlaygroundProvider>
    )
}
