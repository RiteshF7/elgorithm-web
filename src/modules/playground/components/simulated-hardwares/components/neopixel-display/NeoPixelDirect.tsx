// NeoPixelMatrix.tsx
import React, {FC, useEffect, useRef, useState} from "react";
import '@wokwi/elements';
import {ControllerType, Direction, MatrixType, TestCase} from "./types";
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
    testCase: TestCase;
    controllerType:ControllerType
}


export const COMPONENT_KEY = 'NEO_PIXEL_MATRIX';


export const NeoPixelDirect: FC<NeoPixelMatrixProps> = ({matrixType, testCase, matrixSize,controllerType}) => {

    const row = 0, column = 1;
    const input = testCase.input[0];
    const neoPixelDisplayRef = useRef<NeopixelMatrixElement>(null);
    const startingPosition = [input[row], input[column]]
    const [animation, setAnimation] = useState<boolean>(false);
    let position = [...startingPosition];


    let step = 0;
    let expectedPixelPath: any[] = []

    useEffect(() => {
        initDisplay()

        window.addEventListener('keydown', handleKeyboardEvents);

        return () => {
            window.removeEventListener('keydown', handleKeyboardEvents);
        };
    }, []);

    function handleKeyboardEvents(event:KeyboardEvent) {
        switch (event.key) {
            case 'ArrowUp':
                move(Direction.Up)
                break;
            case 'ArrowDown':
                move(Direction.Down)

                break;
            case 'ArrowLeft':
                move(Direction.Left)
                break;
            case 'ArrowRight':
                move(Direction.Right)

                break;
            default:
                break;
        }
    }

    function initDisplay() {
        neoPixelDisplayRef.current?.reset()
        position = [...startingPosition]
        testCase.input.forEach((position: number[]) => {
            setPixelWithColor(position,getRandomColor())
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

        if (!isValidPosition(newPosition[row], newPosition[column], matrixSize)) {
            // shcUtils.failure('pixel out of bound!',handleFailure)
            console.log('invalid move!')
            return;
        }


        position[row] = newPosition[row];
        position[column] = newPosition[column];

        if (isValidStep(position)) {
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
                    const matchingPath = testCase.expectedOutput.find(path => isPixelEqual(actualPosition, path[0]));
                    if (matchingPath) expectedPixelPath = matchingPath;
                    break;

                case MatrixType.UNI_DIRECTIONAL:
                    expectedPixelPath = testCase.expectedOutput;
                    break;

                default:
                    break;
            }
        }
    }


    function isValidStep(actualPosition: number[]): boolean {
        setExpectedPath(actualPosition);
        const expectedPixelPosition = expectedPixelPath[step];
        if (!expectedPixelPosition) return false;
        step++;
        return isPixelEqual(actualPosition, expectedPixelPosition);
    }


    function isPixelEqual(actualPosition: number[], expectedPosition: any) {
        return actualPosition.every((value, index) => value === expectedPosition[index]);
    }


    function setPixel(position: number[]) {
        neoPixelDisplayRef.current?.setPixel(position[row], position[column], {r: 117, g: 195, b: 141});
    }

    const colors: RGB[] = [
        { r: 188, g: 106, b: 102 },
        { r: 190, g: 104, b: 170 },
        { r: 117, g: 195, b: 141 },
        { r: 106, g: 168, b: 194 },
        { r: 131, g: 115, b: 195 }
    ];

    function getRandomColor(): RGB {

        const randomIndex = Math.floor(Math.random() * colors.length);
        console.log(randomIndex)
        return colors[randomIndex];
    }


    function setPixelWithColor(position: number[], color: RGB) {
        neoPixelDisplayRef.current?.setPixel(position[row], position[column], color);
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
