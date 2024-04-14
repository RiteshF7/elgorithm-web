import {FC, useEffect, useState} from "react";
import {getChannelMessageWithDelay, resetMessageQueue} from "@/utils/pg-comm-channel.util";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import SHCUtils from "@/modules/playground/components/simulated-hardwares/utils/commonUtils";
import {useSimpleStateViewModel} from "@/modules/playground/components/simulated-hardwares/components/led/LedViewModel";
import {Button} from "@/modules/common/components/button/Button";

const COMPONENT_KEY = "BUZZER"

export interface BuzzerState {
    state: boolean;
}

export interface BuzzerProps {
    testCase:BuzzerTestCase
}

interface BuzzerTestCase{
    input:BuzzerState[];
    expectedOutput:BuzzerState[];
}

export const Buzzer: FC<BuzzerProps> = ({testCase}) => {
    const initialState = testCase.input[0]
    const [state, setState] = useState<BuzzerState>(initialState)

    const {actualState,runCode} = useSimpleStateViewModel(testCase.expectedOutput,resetComponent);

    const execute = ()=>{
        runCode([changeBuzzerState],['changeBuzzerState'])
    }



    function resetComponent() {
        changeBuzzerState(initialState)
    }

    function changeBuzzerState(data:any){
        actualState.push(data)
        setState(data)
    }


    return <div className={'flex flex-col p-2'}>
        <wokwi-buzzer hasSignal={state.state ? true : undefined}></wokwi-buzzer>
        <Button onClick={execute} uiType={'primary'}/>

    </div>
}
