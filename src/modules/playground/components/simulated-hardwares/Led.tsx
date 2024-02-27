import {FC, useEffect, useState} from "react";
import {usePlayground} from "@/modules/playground/providers/playground.provider";

interface LedStateType {
    active?: boolean;
    color?: string;
}

const COMPONENT_KEY = 'LED';

export const Led: FC = () => {

    const [state, setState] = useState<LedStateType>({
        active: false
    });
    const {registerComponent} = usePlayground();

    useEffect(() => {
        registerComponent(COMPONENT_KEY, (data) => {
            setState((state) => ({...state, ...data}))
        })
    }, []);
    return (
        <div className={'rounded-full h-12 w-12'} style={{backgroundColor: state.active ? state.color : 'black'}}/>
    )
}
