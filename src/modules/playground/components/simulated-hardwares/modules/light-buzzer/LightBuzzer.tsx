import {FC} from "react";

interface LightBuzzerProps {
    initialState: LightBuzzerState;
    desiredState: LightBuzzerState
}

interface LightBuzzerState {
    sensorValue: number;
    buzzerState: number;
}

export const COMPONENT_KEY = 'LIGHT_BUZZER'

export const LightBuzzerModule: FC<LightBuzzerState> = ({sensorValue, buzzerState}) => {

    return (
        <div/>
    )

}

