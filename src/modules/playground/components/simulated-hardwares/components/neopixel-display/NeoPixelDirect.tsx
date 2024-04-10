// NeoPixelMatrix.tsx
import React, {FC, useEffect, useRef, useState} from "react";
import '@wokwi/elements';
import {ControllerType, Direction, MatrixType, TestCase} from "./types";
import {calculateMove, isValidPosition} from "./NeoPixelUtils";
import {NeopixelMatrixElement} from "@wokwi/elements";
import {RGB} from "@wokwi/elements/dist/cjs/types/rgb";
import {Button} from "@/modules/common/components/button/Button";
import {
    useNeoPixelViewModel
} from "@/modules/playground/components/simulated-hardwares/components/neopixel-display/NeoPixelViewModel";

/*
 Test case 1 : move pixel right;
 Test case 2 : move pixel right 3 times
 Test case 3 : Joint 2 pixels using the shortest path
 */


//indirect component
//dynamic component


interface NeoPixelMatrixProps {
    matrixSize: number;
    matrixType: MatrixType;
    testCase: TestCase;
    controllerType: ControllerType
}


export const COMPONENT_KEY = 'NEO_PIXEL_MATRIX';


export const NeoPixelDirect: FC<NeoPixelMatrixProps> = ({matrixType, testCase, matrixSize, controllerType}) => {

    const {neoPixelDisplayRef, animation,executeBlockCode} = useNeoPixelViewModel({
        matrixType,
        testCase,
        matrixSize,
    });
    return (

        <div className={'flex-col items-center'}>

            <div className={' bg-black flex flex-col gap-4 p-2'}>
                <wokwi-neopixel-matrix ref={neoPixelDisplayRef} rows={matrixSize} cols={matrixSize}
                                       blurLight={true}
                                       animation={animation ? true : undefined}></wokwi-neopixel-matrix>
            </div>
            <Button uiType={'primary'} onClick={executeBlockCode}></Button>


        </div>
    );
};
