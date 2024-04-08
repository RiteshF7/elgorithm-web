// NeoPixelMatrix.tsx
import React, {FC, useEffect, useRef, useState} from "react";
import '@wokwi/elements';
import {Direction, Position} from "./types";
import {calculateMove, isValidPosition} from "./NeoPixelUtils";
import {NeopixelMatrixElement} from "@wokwi/elements";
import {RGB} from "@wokwi/elements/dist/cjs/types/rgb";
import {Button} from "@/modules/common/components/button/Button";

/*
 Test case 1 : move pixel right;
 Test case 2 : move pixel right 3 times
 Test case 3 : Joint 2 pixels using the shortest path
 */


//indirect component
//dynamic component


interface NeoPixelMatrixProps {
    initialPositions: Position[];
    matrixSize: number;
}

//matrix can be of type
//Uni-directional
//Bi-directional
//every Bi-directional matrix will become uni-directional after step one
//because there is no going back or reverse
//distance should be shortest as possible


export const COMPONENT_KEY = 'NEO_PIXEL_MATRIX';

enum MatrixType {
    UNI_DIRECTIONAL,
    BI_DIRECTIONAL
}

export const NeoPixelDirect: FC<NeoPixelMatrixProps> = ({initialPositions, matrixSize}) => {

    let step = 0;
    const testCaseOne = {
        input: [[5, 5]],
        expectedOutput: [[5, 6]],
        pixelMatrixType: MatrixType.UNI_DIRECTIONAL
    }

    const testCaseTwo = {
        input: [[5, 5]],
        expectedOutput: [[5, 6], [5, 7], [5, 8]]
    }

    const testCaseThree = {
        input: [[5, 5], [10, 10]],
        expectedOutput: [
            {
                biDirectionInitialPixel: [[6, 5], [5, 6]],
                uniDirectionalPaths: [
                    [7, 5], [8, 5], [9, 5], [10, 5], [10, 6], [10, 7], [10, 8], [10, 9], [10, 10],
                    [5, 7], [5, 8], [5, 9], [5, 10], [6, 10], [7, 10], [8, 10], [9, 10], [10, 10]
                ]
            }
        ]
    }


    const startingPosition = {row: testCaseOne.input[0][0], column: testCaseOne.input[0][1]}
    const [animation, setAnimation] = useState<boolean>(false);
    const neoPixelDisplayRef = useRef<NeopixelMatrixElement>(null);
    let position = {...startingPosition};


    useEffect(() => {
        initDisplay()
    }, []);

    function initDisplay() {
        neoPixelDisplayRef.current?.reset()
        position = {...startingPosition}
        testCaseOne.input.forEach((position: number[]) => {
            setPixel({row: position[0], column: position[1]})
        })
    }


    function handleSuccess() {
        initDisplay()
        setAnimation(true);
    }

    function handleFailure() {
        initDisplay()
    }


    function move(direction: Direction): void {
        const newPosition = calculateMove(direction, position);

        if (!isValidPosition(newPosition.row, newPosition.column, matrixSize)) {
            // shcUtils.failure('pixel out of bound!',handleFailure)
            console.log('invalid move!')
            return;
        }


        position.row = newPosition.row;
        position.column = newPosition.column;
        if (isValidStep([position.row, position.column])) {
            setPixel(position);
            if(step === testCaseOne.expectedOutput.length){
                console.log("Test case passed !")
                return;
            }
            return;
        }
        console.log('failure callback!')
    }

    function isValidStep(actualPosition: number[]): boolean {
        switch (testCaseOne.pixelMatrixType) {
            case MatrixType.UNI_DIRECTIONAL:
                let expectedPixelPosition = testCaseOne.expectedOutput[step++]
                return isPixelPositionEqual(actualPosition,expectedPixelPosition)

            case MatrixType.BI_DIRECTIONAL:
                break;
        }

        return false
    }

    function isPixelPositionEqual(actualPosition: number[], expectedPosition: number[]) {
        return actualPosition.every((value, index) => value === expectedPosition[index]);
    }


    function setPixel(position: Position) {
        neoPixelDisplayRef.current?.setPixel(position.row, position.column, {r: 117, g: 195, b: 141});
    }

    function setPixelWithColor(position: Position, color: RGB) {
        neoPixelDisplayRef.current?.setPixel(position.row, position.column, color);
    }

    return (

        <div className={'flex-col items-center'}>

            <div className={' bg-black flex flex-col gap-4 p-2'}>
                <wokwi-neopixel-matrix ref={neoPixelDisplayRef} rows={matrixSize} cols={matrixSize}
                                       blurLight={true}
                                       animation={animation ? true : undefined}></wokwi-neopixel-matrix>
            </div>

            <Button uiType={'primary'} onClick={() => {
                move(Direction.Right)
            }}/>

        </div>
    );
};
