"use client";

import {FC, useEffect} from 'react';
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import {Led} from "@/modules/playground/components/simulated-hardwares/Led";
import {Cube} from "@/modules/playground/components/simulated-hardwares/cube";
import {Canvas} from "@react-three/fiber";
import Car from "@/modules/playground/components/simulated-hardwares/car";

export const PlaygroundRunner: FC = () => {
    const {jsCodeString} = usePlayground();

    useEffect(() => {

    }, [])

    return (
        <div className={'basis-4/12 bg-white  rounded-lg flex justify-center items-center h-96'}>

            {/*<Cube/>*/}
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Cube />
            </Canvas>
        </div>
    )
}
