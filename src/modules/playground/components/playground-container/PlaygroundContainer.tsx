'use client';
import React, {FC} from 'react';
import {PlaygroundActions} from "@/modules/playground/components/playground-actions/PlaygroundActions";
import {PlaygroundEditor} from "@/modules/playground/components/playground-editor/PlaygroundEditor";
import {PlaygroundProvider} from "@/modules/playground/providers/playground.provider";
import {ProblemStatement} from "@/modules/playground/components/playground-problem-statement/ProblemStatement";
import {PlaygroundRunner} from "@/modules/playground/components/playground-runner/PlaygroundRunner";
import {Led} from "@/modules/playground/components/simulated-hardwares/Led";
import {NeoPixelMatrix} from "@/modules/playground/components/simulated-hardwares/neopixel_matrix";







export const PlayGroundContainer: FC = () => {
    return (
        <PlaygroundProvider>
            <div className={'flex flex-row gap-4  items-center'}>
                <div className={'flex flex-col gap-4 flex-grow'}>
                    <ProblemStatement problem={"some ques"} description={"some ques description"}/>
                    <PlaygroundEditor/>
                    <PlaygroundActions/>
                </div>
                <PlaygroundRunner simulatedHardware={<NeoPixelMatrix/>}/>

            </div>
        </PlaygroundProvider>
    )
}
