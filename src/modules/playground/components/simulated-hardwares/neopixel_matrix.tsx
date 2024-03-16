'use client';

import React, {FC, useEffect, useRef, useState} from "react";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import '@wokwi/elements';
import {RGB} from "@wokwi/elements/dist/cjs/types/rgb";
import {NeopixelMatrixElement} from "@wokwi/elements/dist/esm/neopixel-matrix-element";


interface NeoPixelMatrixStateType {
    row: number;
    column: number;
    rgb: RGB;
}

const COMPONENT_KEY = 'NEO_PIXEL_MATRIX';

export const NeoPixelMatrix: FC = () => {

    const neoPixelDisplayRef = useRef<NeopixelMatrixElement>();

    const [state, setState] = useState<NeoPixelMatrixStateType>({
        row: 0, column: 0,
        rgb: {r: 0, g: 0, b: 0},

    });



    const {registerComponent} = usePlayground();

    useEffect(() => {

        registerComponent(COMPONENT_KEY, (data) => {
            console.log('Updated NeoPixelMatrix data', data);
            setState((state) => ({...state, ...data}))
            neoPixelDisplayRef.current?.setPixel(state.row, state.column, state.rgb);
        })
    }, []);

    return (

        <div className={' bg-black flex flex-col gap-4 p-2'}>
            {/*<wokwi-neopixel-matrix rows={8} cols={8} rowSpacing={2} colSpacing={2} animation={true} />*/}
            {// @ts-ignore
            <wokwi-neopixel-matrix ref={neoPixelDisplayRef} cols={8} blurLight={true} ></wokwi-neopixel-matrix>
            }
            <button className={'bg-amber-400 w-10 h-10'} onClick={() => {
                neoPixelDisplayRef.current?.setPixel(2, 3, {r: 225, g: 0, b: 0})
                console.log('Updated NeoPixelMatrix data');

            }}></button>

        </div>);
}
