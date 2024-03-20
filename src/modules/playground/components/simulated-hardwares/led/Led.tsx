'use client';

import {FC, useEffect, useState} from "react";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import '@wokwi/elements';


interface LedStateType {
    active?: boolean;
    color?: string;
}

export const COMPONENT_KEY = 'LED';

export const Led: FC = () => {

    const [state, setState] = useState<LedStateType>({
        active: false, color: 'red'
    });

    const {registerComponent} = usePlayground();

    useEffect(() => {

        registerComponent(COMPONENT_KEY, (data) => {
            setState((state) => ({...state, ...data}))
        })
    }, []);
    return (

        <wokwi-led color={state.color} value={state.active ? true : undefined}></wokwi-led>
    )
}
