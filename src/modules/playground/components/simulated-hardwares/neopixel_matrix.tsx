'use client';

import {FC, useEffect, useState} from "react";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import '@wokwi/elements';


interface NeoPixelMatrixStateType {
    active?: boolean;
    color?: string;
}

const COMPONENT_KEY = 'NEO_PIXEL_MATRIX';

export const NeoPixelMatrix: FC = () => {

    const [state, setState] = useState<NeoPixelMatrixStateType>({
        active: false,color: 'red'
    });

    const {registerComponent} = usePlayground();

    useEffect(() => {

        registerComponent(COMPONENT_KEY, (data) => {
            console.log('Updated NeoPixelMatrix data', data);
            setState((state) => ({...state, ...data}))
        })
    }, []);
    return (

        <div className={'flex flex-row gap-4  items-center bg-black p-4'}>
            {//@ts-ignore
            <wokwi-neopixel-matrix rows="16" cols="16"></wokwi-neopixel-matrix>
            }
        </div>)
}
