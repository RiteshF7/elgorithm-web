import {FC, useEffect, useState} from "react";
import {useShContext} from "@/modules/playground/providers/SH.provider";
import {COMPONENT_KEY, Led, LedConfig} from "@/modules/playground/components/simulated-hardwares/components/led/Led";

export const LedWrapper: FC = () => {
    const {registerComponent, currentState, checkCompletionStatus, stopCode} = useShContext();
    const ledInitState = {...currentState.led};
    const [ledState, setState] = useState<LedConfig>(ledInitState)

    useEffect(() => {

        registerComponent(COMPONENT_KEY, (data) => {
            const isCompleted = checkCompletionStatus(data, () => {
                stopCode()
                setState((state) => ({...state, ...ledInitState}))
                alert('success')

            }, () => {
                stopCode()
                setState((state) => ({...state, ...ledInitState}))
                alert('failed')
            })
            if (!isCompleted) {
                currentState.led.active = data.active;
                currentState.led.color = data.color
                currentState.lightSensor.value = 80
                setState((state) => ({...state, ...currentState.led}))
                //TODO
                //Check if updateCurrentState function is needed in provider
                //if not remove this and
                //implement failed and success and reset message queue on completion
                //check if message queue can be rested on one place in provider
                // write code to reset component

                // setState(currentState)
                // updateCurrentState(data)

            }

        })
    }, []);

    return (
        <Led config={ledState}/>
    )
}