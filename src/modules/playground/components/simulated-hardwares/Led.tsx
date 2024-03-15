'use client';

import {FC, useEffect, useState} from "react";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
// import '@wokwi/elements';


interface LedStateType {
    active?: boolean;
    color?: string;
}

const COMPONENT_KEY = 'LED';

export const Led: FC = () => {

    const [state, setState] = useState<LedStateType>({
        active: false,color: 'green'
    });

    const {registerComponent} = usePlayground();

    useEffect(() => {
        console.log(registerComponent)
        registerComponent(COMPONENT_KEY, (data) => {
            console.log('Updated LED data', data);
            setState((state) => ({...state, ...data}))
        })
    }, []);
    return (
        <div className={'rounded-full h-12 w-12'} style={{backgroundColor: state.active ? state.color : 'lightgray'}}/>
        // <wokwi-led color={state.color} value={state.active}></wokwi-led>
    )
}
