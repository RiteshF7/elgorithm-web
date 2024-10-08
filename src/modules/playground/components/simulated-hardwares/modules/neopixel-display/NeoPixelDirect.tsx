import React, {FC} from "react";
import '@wokwi/elements';
import {ControllerType, MatrixType, TestCase} from "./types";
import {Button} from "@/modules/common/components/button/Button";
import {
    useNeoPixelViewModel
} from "@/modules/playground/components/simulated-hardwares/modules/neopixel-display/NeoPixelViewModel";

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

export const COMPONENT_KEY = 'NEO_PIXEL_DIRECT';




export const NeoPixelDirect: FC<NeoPixelMatrixProps> = ({matrixType, testCase, matrixSize, controllerType}) => {

    const buttonVisibilityClass = controllerType === ControllerType.blocks ? "block" : "hidden";

    const {neoPixelDisplayRef, animation, executeBlockCode} = useNeoPixelViewModel({
        matrixType,
        testCase,
        matrixSize,
        controllerType,});
    return (

        <div className={'flex-col items-center justify-center'}>

            <div className={' bg-black flex flex-col gap-4 p-2'}>
                <wokwi-neopixel-matrix ref={neoPixelDisplayRef} rows={matrixSize} cols={matrixSize}
                                       blurLight={true}
                                       animation={animation ? true : undefined}></wokwi-neopixel-matrix>
            </div>

            <Button className={`button p-4 m-4 justify-center ${buttonVisibilityClass}` } uiType={'primary'} onClick={executeBlockCode}>RUN</Button>


        </div>
    );
};
