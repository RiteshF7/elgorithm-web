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
    DestinationPosition: Position;
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
    Stop = 'Stop',
}


const COMPONENT_KEY = 'NEO_PIXEL_MATRIX';


export const NeoPixelMatrix: FC<NeoPixelMatrixProps> = ({
    startingPosition,
    DestinationPosition,
                                                        }) => {

    const position = {
        row: startingPosition.row, column: startingPosition.column,
    }


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
        setPixel(DestinationPosition.row, DestinationPosition.column);
    }


    function move(Direction: Direction) {
        console.log('move', Direction);
        switch (Direction) {
            case 'Up':
                position.row -= 1;
                break;
            case 'Down':
                position.row += 1;
                break;
            case 'Left':
                position.column -= 1;
                break;
            case 'Right':
                position.column += 1;
                break;
        }
        setNextPixel();
    }

    function setNextPixel() {
        setPixel(position.row, position.column);
    }

    function setPixel(row: number, column: number) {
        neoPixelDisplayRef.current?.setPixel(row, column, {r: 225, g: 0, b: 0});
    }


    return (

        <div className={' bg-black flex flex-col gap-4 p-2'}>
            <wokwi-neopixel-matrix ref={neoPixelDisplayRef} rows={11} cols={11} blurLight={true}></wokwi-neopixel-matrix>
            <div className={'flex flex-row gap-2 justify-center'}>
                <button className={'bg-amber-400 w-10 h-10'} onClick={() => {
                    move(Direction.Up)
                }}>Up
                </button>

                <button className={'bg-amber-400 w-10 h-10'} onClick={() => {
                    move(Direction.Down)
                }}>Down
                </button>

                <button className={'bg-amber-400 w-10 h-10'} onClick={() => {
                    move(Direction.Right)
                }}>Right
                </button>

                <button className={'bg-amber-400 w-10 h-10'} onClick={() => {
                    move(Direction.Left)
                }}>Left
                </button>


            </div>
        </div>);
}
