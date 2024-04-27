import React, {FC} from 'react';
import {getModule, Module, Modules} from "@/modules/playground/components/simulated-hardwares/utils/modulesMap";

interface PlaygroundRunnerProps {
    runnerConfig: any
}

export const PlaygroundRunner: FC<PlaygroundRunnerProps> = ({runnerConfig}) => {

    const isMultiState = runnerConfig.moduleName === Modules.NeoPixelModule
    return (
        <div className={'basis-4/12 bg-white  rounded-lg flex justify-center items-center h-96'}>
            {isMultiState ? getModule(Modules.NeoPixelModule, runnerConfig.moduleConfig) : <Module runnerConfig={runnerConfig}/>}
        </div>

    )
}
