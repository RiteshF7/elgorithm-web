'use client';

import React, {FC, useEffect, useRef, useState} from "react";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import '@wokwi/elements';
import {RGB} from "@wokwi/elements/dist/cjs/types/rgb";
import {NeopixelMatrixElement} from "@wokwi/elements/dist/esm/neopixel-matrix-element";


interface NeoPixelMatrixStateType {
    Direction: Direction;
}

interface NeoPixelMatrixProps {
    startingPosition: Position;
    destinationPosition: Position;
    matrixSize: number;
}

interface Position {
    row: number;
    column: number;
}

enum Direction {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
    TopLeft = 'TopLeft',
    TopRight = 'TopRight',
    BottomLeft = 'BottomLeft',
    BottomRight = 'BottomRight',
    Stop = 'Stop',
}


const COMPONENT_KEY = 'NEO_PIXEL_MATRIX';


export const NeoPixelMatrix: FC<NeoPixelMatrixProps> = ({
                                                            startingPosition,
                                                            destinationPosition,
                                                            matrixSize,
                                                        }) => {

    const {registerComponent} = usePlayground();
    const neoPixelDisplayRef = useRef<NeopixelMatrixElement>(null);
    const [state, setState] = useState<NeoPixelMatrixStateType>({
        Direction: Direction.Stop,
    });

    const position = {...startingPosition}


    useEffect(() => {
        setInitialPixel()
        setDestinationPixel()
        registerComponent(COMPONENT_KEY, (data) => {
            setState((state) => ({...state, ...data}))
            move(data.Direction);
        })
    }, []);


    function setInitialPixel() {
        setNextPixel()
    }

    function setDestinationPixel() {
        setPixel(destinationPosition);
    }


    function move(direction: Direction): Position {
        const newRow = position.row + getVerticalOffset(direction);
        const newColumn = position.column + getHorizontalOffset(direction);

        if (isValidPosition(newRow, newColumn, matrixSize)) {
            position.row = newRow;
            position.column = newColumn;
        }

        setNextPixel();
        return position;
    }

    function getVerticalOffset(direction: Direction): number {
        switch (direction) {
            case Direction.Up || Direction.TopLeft || Direction.TopRight:
                return -1;
            case Direction.Down || Direction.BottomLeft || Direction.BottomRight:
                return 1;
            default:
                return 0;
        }
    }

    function getHorizontalOffset(direction: Direction): number {
        switch (direction) {
            case Direction.Left || Direction.TopLeft || Direction.BottomLeft:
                return -1;
            case Direction.Right || Direction.TopRight || Direction.BottomRight:
                return 1;
            default:
                return 0;
        }
    }

    function isValidPosition(row: number, column: number, matrixSize: number): boolean {
        return row >= 0 && row < matrixSize && column >= 0 && column < matrixSize;
    }


    function setNextPixel() {
        setPixel(position);
    }

    function setPixel(position: Position) {
        neoPixelDisplayRef.current?.setPixel(position.row, position.column, {r: 225, g: 0, b: 0});
    }


    return (

        <div className={' bg-black flex flex-col gap-4 p-2'}>
            <wokwi-neopixel-matrix ref={neoPixelDisplayRef} rows={matrixSize} cols={matrixSize}
                                   blurLight={true}></wokwi-neopixel-matrix>
            <div className={'flex flex-row gap-2 justify-center'}>
                <button className={'bg-amber-400 w-10 h-10'} onClick={() => {
                    move(Direction.TopLeft)
                }}>TL
                </button>

                <button className={'bg-amber-400 w-10 h-10'} onClick={() => {
                    move(Direction.TopRight)
                }}>TR
                </button>

                <button className={'bg-amber-400 w-10 h-10'} onClick={() => {
                    move(Direction.BottomLeft)
                }}>BL
                </button>

                <button className={'bg-amber-400 w-10 h-10'} onClick={() => {
                    move(Direction.BottomRight)
                }}>BR
                </button>


            </div>
        </div>);
}
