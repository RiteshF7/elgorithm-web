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

    const position = {...startingPosition}


    const neoPixelDisplayRef = useRef<NeopixelMatrixElement>(null);

    const [state, setState] = useState<NeoPixelMatrixStateType>({
        Direction: Direction.Stop,
    });


    const {registerComponent} = usePlayground();

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
        console.log('setDestinationPixel', destinationPosition);
        setPixel(destinationPosition);
    }


    function move(Direction: Direction) {
        switch (Direction) {
            case 'Up':
                if (position.row === 0) return;
                position.row -= 1;
                break;
            case 'Down':
                if (position.row === matrixSize - 1) return;
                position.row += 1;
                break;
            case 'Left':
                if (position.column === 0) return;
                position.column -= 1;
                break;
            case 'Right':
                if (position.column === matrixSize - 1) return;
                position.column += 1;
                break;
            case 'TopLeft':
                if (position.row === 0 || position.column === 0) return;
                position.row -= 1;
                position.column -= 1;
                console.log('TopLeft', position);
                break;
            case 'TopRight':
                if (position.row === 0 || position.column === matrixSize - 1) return;
                position.row -= 1;
                position.column += 1;
                break;
            case 'BottomLeft':
                if (position.row === matrixSize - 1 || position.column === 0) return;
                position.row += 1;
                position.column -= 1;
                break;
            case 'BottomRight':
                if (position.row === matrixSize - 1 || position.column === matrixSize - 1) return;
                position.row += 1;
                position.column += 1;
                break;
            case 'Stop':
                break;
        }
        console.log('move', position);
        setNextPixel();
    }

    function setNextPixel() {
        setPixel(position);
    }

    function setPixel(position: Position) {
        neoPixelDisplayRef.current?.setPixel(position.row, position.column, {r: 225, g: 0, b: 0});
    }

    // Check if the position is within the matrix bounds



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
