import {FC, useEffect, useState} from "react";
import {Led, LedConfig} from "@/modules/playground/components/simulated-hardwares/components/led/Led";
import {Button} from "@/modules/common/components/button/Button";
import _ from 'lodash'
import {useSimpleStateViewModel} from "@/modules/playground/components/simulated-hardwares/components/led/LedViewModel";
import {TestCase} from "@/modules/playground/components/simulated-hardwares/components/neopixel-display/types";

export interface LedModuleProps {
    testCase: LedTestCase;
}

interface LedTestCase{
    input: LedConfig[],
    expectedOutput: LedConfig[]
}

export const LedModule: FC<LedModuleProps> = ({testCase}) => {

    const {input,expectedOutput } = testCase
    const initialState = input[0]
    const [ledState, setLedState] = useState<LedConfig>(initialState);
    const {runCode,actualState} = useSimpleStateViewModel(expectedOutput,resetModule);

    // @ts-ignore
    const changeLedState = async (state:LedConfig) => {
        actualState.push(state)
        setLedState(state);
    }

    function resetModule(){
        setLedState(initialState)
    }
    async function onClick() {
        runCode([changeLedState],['changeLedState'])
    }

    return (
        <div className={'flex flex-col p-3 items-center'}>
            <Led config={ledState}/>
            <Button onClick={onClick} uiType={'primary'}/>
        </div>

    )
}
