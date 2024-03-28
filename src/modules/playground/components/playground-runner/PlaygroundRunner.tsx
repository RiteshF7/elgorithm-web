import React, {FC} from 'react';
import {Led} from "@/modules/playground/components/simulated-hardwares/components/led/Led";
import {SHProvider} from "@/modules/playground/providers/SH.provider";

interface PlaygroundRunnerProps {
    simulatedHardware: React.ReactNode;
    intialState: any;
    desiredState: any;
}

export const PlaygroundRunner: FC<PlaygroundRunnerProps> = ({simulatedHardware, intialState, desiredState,}) => {


    return (
        <SHProvider initialState={intialState} desiredState={desiredState}>
            <div className={'basis-4/12 bg-white  rounded-lg flex justify-center items-center h-96'}>
                {simulatedHardware}
            </div>
        </SHProvider>

    )
}
