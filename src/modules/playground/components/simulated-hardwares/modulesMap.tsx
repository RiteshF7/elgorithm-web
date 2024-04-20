import {
    NeoPixelDirect
} from "@/modules/playground/components/simulated-hardwares/components/neopixel-display/NeoPixelDirect";
import {LedModule} from "@/modules/playground/components/simulated-hardwares/components/led/LedModule";
import {Buzzer} from "@/modules/playground/components/simulated-hardwares/components/buzzer/Buzzer";
import React, {FC, useState} from "react";
import {
    ServoModule,
    ServoMotor
} from "@/modules/playground/components/simulated-hardwares/components/servo-motor/ServoModule";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import {
    runTestCases
} from "@/modules/playground/components/simulated-hardwares/components/base-custom-hooks/codeProcessor";
import {Button} from "@/modules/common/components/button/Button";
import {Led} from "@/modules/playground/components/simulated-hardwares/components/led/Led";

export enum Modules {
    NeoPixelModule = 'neo-pixel-module',
    LedModule = 'led-module',
    NoModule = 'no-module',
    BuzzerModule = 'buzzer-module',
    ServoModule = 'servo-module',

}

export function getModule(module: Modules = Modules.NoModule, runnerConfig: any) {
    switch (module) {
        case Modules.NeoPixelModule:
            return <NeoPixelDirect {...runnerConfig}/>
        case Modules.LedModule:
            return <Led {...runnerConfig}/>
        case Modules.BuzzerModule:
            return <Buzzer {...runnerConfig}/>
        case Modules.ServoModule:
            return <ServoMotor {...runnerConfig}/>
    }
}


interface ModuleProps {
    runnerConfig: any;
}


export const Module: FC<ModuleProps> = ({runnerConfig}) => {
    console.log(runnerConfig, 'runnerConfig')
    const {getJsCode} = usePlayground();
    const [moduleState, setModuleState] = useState(runnerConfig.moduleConfig.testCases[0].initialState)

    function updateState(state: any) {
        setModuleState((prevState: any) => {
            return {
                ...prevState,
                ...state
            };
        });

    }

    function runCode() {
        runTestCases({}, getJsCode(), runnerConfig.moduleConfig.testCases, updateState).then(r => console.log(r))
    }


    return (
        <div className={'flex flex-col items-center p-2 m-2'}>
            {
                runnerConfig.moduleNames.map((module:Modules) => {
                    return getModule(module, moduleState[module])
                })
            }
            <Button onClick={() => {
                runCode()
            }} uiType={'primary'}/>

        </div>
    )
}



