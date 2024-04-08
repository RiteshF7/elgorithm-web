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
    matrixSize: number;
    matrixType: MatrixType;
}

//matrix can be of type
//Uni-directional
//Bi-directional
//every Bi-directional matrix will become uni-directional after step one
//because there is no going back or reverse
//distance should be shortest as possible


export const COMPONENT_KEY = 'NEO_PIXEL_MATRIX';

export enum MatrixType {
    UNI_DIRECTIONAL,
    BI_DIRECTIONAL
}

export const NeoPixelDirect: FC<NeoPixelMatrixProps> = ({matrixType, matrixSize}) => {

    let step = 0;

    const one = {
        input: [[5, 5]],
        expectedOutput: [[5, 6]],
    }

    const Two = {
        input: [[5, 5]],
        expectedOutput: [[5, 6], [5, 7], [5, 8]]
    }

    const Three = {
        input: [[5, 5], [10, 10]],
        expectedOutput: [
            [[6, 5], [7, 5], [8, 5], [9, 5], [10, 5], [10, 6], [10, 7], [10, 8], [10, 9], [10, 10]],
            [[5, 6], [5, 7], [5, 8], [5, 9], [5, 10], [6, 10], [7, 10], [8, 10], [9, 10], [10, 10]]
        ]


    }

    let testCase = Three

    let expectedPixelPath: any[] = []


    const startingPosition = {row: testCase.input[0][0], column: testCase.input[0][1]}
    const [animation, setAnimation] = useState<boolean>(false);
    const neoPixelDisplayRef = useRef<NeopixelMatrixElement>(null);
    let position = {...startingPosition};


    useEffect(() => {
        initDisplay()
    }, []);

    function initDisplay() {
        neoPixelDisplayRef.current?.reset()
        position = {...startingPosition}
        testCase.input.forEach((position: number[]) => {
            setPixel({row: position[0], column: position[1]})
        })
    }


    function handleSuccess() {
        initDisplay()
        setAnimation(true);
    }

    function handleFailure() {
        console.log("failure!")
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
            if (step === expectedPixelPath.length) {
                handleSuccess()
                return;
            }
            return;
        }
        handleFailure()
    }

    function setExpectedPath(actualPosition: number[]) {
        if (step === 0) {
            switch (matrixType) {
                case MatrixType.BI_DIRECTIONAL:
                    let allPaths = testCase.expectedOutput
                    for (let i = 0; i < allPaths.length; i++) {
                        if (isPixelEqual(actualPosition, allPaths[i][0])) {
                            expectedPixelPath = allPaths[i]
                        }
                    }

                    break


                case MatrixType.UNI_DIRECTIONAL:
                    expectedPixelPath = testCase.expectedOutput
            }
        }
    }

    function isValidStep(actualPosition: number[]): boolean {
        setExpectedPath(actualPosition)
        console.log(expectedPixelPath)
        if (expectedPixelPath.length == 0) return false
        let expectedPixelPosition = expectedPixelPath[step++]
        return isPixelEqual(actualPosition, expectedPixelPosition)
    }

    function isPixelEqual(actualPosition: number[], expectedPosition: any) {
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

            <Button uiType={'primary'} title={'right'} onClick={() => {
                move(Direction.Right)
            }}/>
            <Button uiType={'primary'} title={'down'} onClick={() => {
                move(Direction.Down)
            }}/>

        </div>
    );
};
