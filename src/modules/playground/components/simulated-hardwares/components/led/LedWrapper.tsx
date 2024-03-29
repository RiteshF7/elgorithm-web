import {FC, useEffect, useState} from "react";
import {useShContext} from "@/modules/playground/providers/SH.provider";
import {COMPONENT_KEY, Led, LedConfig} from "@/modules/playground/components/simulated-hardwares/components/led/Led";

export const LedWrapper: FC = () => {
    const {registerComponent, currentState, checkCompletionStatus} = useShContext();
    const initialState = {...currentState.led};
    const [ledState, setState] = useState<LedConfig>(initialState)

    useEffect(() => {

        registerComponent(COMPONENT_KEY, (data) => {
            const isCompleted = checkCompletionStatus(data, () => {
                setState((state) => ({...state, ...initialState}))
                alert('success')

            }, () => {
                console.log(currentState,'some')
                setState((state) => ({...state, ...initialState}))
                alert('failed')
            })
            if (!isCompleted) {
                currentState.led.active = data.active;
                currentState.led.color = data.color;
                setState((state) => ({...state, ...currentState.led}))

            }

        })
    }, []);

    return (
        <Led config={ledState}/>
    )
}