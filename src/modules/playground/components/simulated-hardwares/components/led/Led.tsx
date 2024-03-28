'use client';

import {FC, useEffect, useRef, useState} from "react";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import '@wokwi/elements';
import {useShContext} from "@/modules/playground/providers/SH.provider";
import {LEDElement, NeopixelMatrixElement} from "@wokwi/elements";


interface LedStateType {
    active?: boolean;
    color?: string;
}

export const COMPONENT_KEY = 'LED';

export const Led: FC = () => {


    const {registerComponent, currentState, updateCurrentState, checkCompletionStatus} = useShContext();
    const [state, setState] = useState(currentState)

    useEffect(() => {

        registerComponent(COMPONENT_KEY, (data) => {
            const isCompleted = checkCompletionStatus(data, () => {
                alert('success')
            }, () => {
                alert('failed')
            })
            if (!isCompleted) {
                currentState.active = data.active;
                currentState.color = data.color
                setState((state: any) => ({...state, ...currentState}))
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

        <wokwi-led color={state.color} value={state.active ? true : undefined}></wokwi-led>
    )
}
