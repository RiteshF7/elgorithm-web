'use client';
import {FC} from 'react';
import {PlaygroundActions} from "@/modules/playground/components/playground-actions/PlaygroundActions";
import {PlaygroundEditor} from "@/modules/playground/components/playground-editor/PlaygroundEditor";
import {PlaygroundRunner} from "@/modules/playground/components/playground-runner/PlaygroundRunner";
import {PlaygroundProvider} from "@/modules/playground/providers/playground.provider";

export const PlayGroundContainer: FC = () => {
    return (
        <PlaygroundProvider>
            <div className={'flex flex-col gap-4'}>
                <PlaygroundActions/>
                <div className={'flex gap-4 border-1 border-gray-500 rounded-lg'}>
                    <PlaygroundEditor/>
                    <PlaygroundRunner/>
                </div>
            </div>
        </PlaygroundProvider>
    )
}
