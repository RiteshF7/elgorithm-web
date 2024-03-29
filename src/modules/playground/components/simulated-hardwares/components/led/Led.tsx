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

export interface LedConfig {
    color: string,
    active: boolean
}
interface LedProps{
    config:LedConfig
}

export const Led: FC<LedProps> = ({config}) => {
    return (
        <wokwi-led color={config.color} value={config.active ? true : undefined}></wokwi-led>
    )
}
