'use client';

import {FC, useEffect, useState} from "react";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import '@wokwi/elements';
import {useShContext} from "@/modules/playground/providers/SH.provider";


interface LedStateType {
    active?: boolean;
    color?: string;
}

export const COMPONENT_KEY = 'LED';

export const Led: FC = () => {

    const [state, setState] = useState<LedStateType>({
        active: false, color: 'red'
    });

    const {registerComponent,updateCurrentState,checkCompletionStatus} = useShContext();

    useEffect(() => {

        registerComponent(COMPONENT_KEY, (data) => {
            const isCompleted = checkCompletionStatus(data,()=>{
              alert('success')
            },()=>{
                alert('failed')
            })
            if(!isCompleted){
                setState((state) => ({...state, ...data}))
                updateCurrentState(data)
            }

        })
    }, []);
    return (

        <wokwi-led color={state.color} value={state.active ? true : undefined}></wokwi-led>
    )
}
