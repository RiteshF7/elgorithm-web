"use client";

import {FC, useEffect} from 'react';
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import {Cube} from "@/modules/playground/components/simulated-hardwares/cube";
import {Canvas} from "@react-three/fiber";

export const PlaygroundRunner: FC = () => {
    const {jsCodeString} = usePlayground();

    useEffect(() => {

    }, [])

    return (
        <div className={'basis-4/12 bg-white  rounded-lg flex justify-center items-center h-96'}>

            <Canvas>
                <ambientLight/>
                <pointLight position={[10, 10, 10]}/>
                <Cube/>
            </Canvas>
        </div>
    )
}
