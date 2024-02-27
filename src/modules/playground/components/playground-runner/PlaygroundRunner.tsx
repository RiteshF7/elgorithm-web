"use client";

import {FC, useEffect} from 'react';
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import {Led} from "@/modules/playground/components/simulated-hardwares/Led";

export const PlaygroundRunner: FC = () => {
    const {jsCodeString} = usePlayground();

    useEffect(() => {

    }, [])

    return (
        <div className={'basis-4/12 bg-gray-500  rounded-lg flex justify-center items-center h-96'}>

            <Led/>

        </div>
    )
}
