import React, {FC, useEffect} from 'react';
import {Led} from "@/modules/playground/components/simulated-hardwares/components/led/Led";
import {SHProvider} from "@/modules/playground/providers/SH.provider";

interface PlaygroundRunnerProps {
    simulatedHardware: React.ReactNode;
    runnerConfig: any
}

export const PlaygroundRunner: FC<PlaygroundRunnerProps> = ({simulatedHardware, runnerConfig}) => {

    return (
        <SHProvider initialUiState={runnerConfig.initialState} desiredUiState={runnerConfig.desiredState}>
            <div className={'basis-4/12 bg-white  rounded-lg flex justify-center items-center h-96'}>
                {simulatedHardware}
            </div>
        </SHProvider>

    )
}
