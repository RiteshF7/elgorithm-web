import React, {FC} from 'react';
import {Module} from "@/modules/playground/components/simulated-hardwares/utils/modulesMap";

interface PlaygroundRunnerProps {
    runnerConfig:any
}

export const PlaygroundRunner: FC<PlaygroundRunnerProps> = ({runnerConfig}) => {

    return (
        <div className={'basis-4/12 bg-white  rounded-lg flex justify-center items-center h-96'}>
            <Module runnerConfig={runnerConfig}/>
        </div>

    )
}
