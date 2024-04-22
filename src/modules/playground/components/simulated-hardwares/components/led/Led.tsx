'use client';

import {FC, useEffect, useRef, useState} from "react";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import '@wokwi/elements';
import {useShContext} from "@/modules/playground/providers/SH.provider";
import {LEDElement, NeopixelMatrixElement} from "@wokwi/elements";

export interface LedState {
    color: string,
    active: boolean
}


export const Led: FC<LedState> = ({color,active}) => {
    return (
        <wokwi-led color={color} value={active ? true : undefined}></wokwi-led>
    )
}
