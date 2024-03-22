import {FC, useEffect, useState} from "react";
import {getChannelMessageWithDelay, resetMessageQueue} from "@/utils/pg-comm-channel.util";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import SHCUtils from "@/modules/playground/components/simulated-hardwares/custom-hooks/commonUtils";

const COMPONENT_KEY = "BUZZER"

interface BuzzerState {
    state: boolean;
}

interface BuzzerProps {
    initialState: BuzzerState;
    desiredState: BuzzerState;
}

export const Buzzer: FC<BuzzerProps> = ({initialState, desiredState}) => {
    const [state, setState] = useState<BuzzerState>({state: false})
    const shcUtils = new SHCUtils(COMPONENT_KEY, desiredState);

    useEffect(() => {
        initComponent()
    }, []);


    function initComponent() {
        setState(initialState)
        shcUtils.registerComponent((data) => {
            console.log(data)
            shcUtils.processResult(data, handleSuccess, handleFailure, handlePayload);
        });
    }

    function handlePayload(data: any) {
        setState(data)
    }

    function handleSuccess() {
        resetComponent()
    }

    function handleFailure() {
        resetComponent()
    }

    function resetComponent() {
        setState(initialState)
    }


    return <div className={'flex flex-col p-2'}>
        <wokwi-buzzer hasSignal={state ? true : undefined}></wokwi-buzzer>
    </div>
}

export const buzzerController = {
    turnBuzzerOn: () => getChannelMessageWithDelay(COMPONENT_KEY, {state: true}, 200),
    turnBuzzerOff: () => getChannelMessageWithDelay(COMPONENT_KEY, {state: false}, 200)
}
