import {FC, useEffect, useState} from "react";
import {getChannelMessageWithDelay, resetMessageQueue} from "@/utils/pg-comm-channel.util";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import SHCUtils from "@/modules/playground/components/simulated-hardwares/utils/commonUtils";

const COMPONENT_KEY = "BUZZER"

export interface BuzzerState {
    state: boolean;
}

export interface BuzzerProps {
    initialState: BuzzerState;
    desiredState: BuzzerState;
}

export const Buzzer: FC<BuzzerProps> = ({initialState, desiredState}) => {
    const [state, setState] = useState<BuzzerState>({state: false})
    const shcUtils = new SHCUtils(COMPONENT_KEY, initialState,desiredState,handleSuccess,handleFailure);

    useEffect(() => {
        resetComponent()
        shcUtils.initComponent(handlePayload)
    }, []);


    function handlePayload(data: any) {
      updateState(data)
    }

    function handleSuccess() {
        updateState({state:true})
    }

    function handleFailure() {
        resetComponent()
    }

    function resetComponent() {
        updateState(initialState)
    }

    function updateState(data:any){
        setState(data)
        shcUtils.updateState(data)
    }


    return <div className={'flex flex-col p-2'}>
        <wokwi-buzzer hasSignal={state.state ? true : undefined}></wokwi-buzzer>
    </div>
}

export const buzzerController = {
    turnBuzzerOn: () => getChannelMessageWithDelay(COMPONENT_KEY, {state: true}, 200),
    turnBuzzerOff: () => getChannelMessageWithDelay(COMPONENT_KEY, {state: false}, 200)
}
