// NeoPixelMatrix.tsx
import React, {FC, useEffect, useRef, useState} from "react";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import '@wokwi/elements';
import {Position, Direction} from "./types";
import {calculateMove, isValidPosition} from "./NeoPixelUtils";
import {NeopixelMatrixElement} from "@wokwi/elements";

interface NeoPixelMatrixProps {
    startingPosition: Position;
    destinationPosition: Position;
    matrixSize: number;
}

interface NeoPixelMatrixStateType {
    Direction: Direction;
}

export const COMPONENT_KEY = 'NEO_PIXEL_MATRIX';

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

    const position = {...startingPosition};

    useEffect(() => {
        setInitialPixel();
        setDestinationPixel();
        registerComponent(COMPONENT_KEY, (data) => {
            setState((state) => ({...state, ...data}));
            move(data.Direction);
        });
    }, []);

    function setInitialPixel() {
        setNextPixel();
    }

    function setDestinationPixel() {
        setPixel(destinationPosition);
    }

    function move(direction: Direction): void {
        const newPosition = calculateMove(direction, position);

        if (isValidPosition(newPosition.row, newPosition.column, matrixSize)) {
            position.row = newPosition.row;
            position.column = newPosition.column;
            setNextPixel();
        }
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
                <button className={'bg-amber-400 w-10 h-10'} onClick={() => move(Direction.TopLeft)}>TL</button>
                <button className={'bg-amber-400 w-10 h-10'} onClick={() => move(Direction.TopRight)}>TR</button>
                <button className={'bg-amber-400 w-10 h-10'} onClick={() => move(Direction.BottomLeft)}>BL</button>
                <button className={'bg-amber-400 w-10 h-10'} onClick={() => move(Direction.BottomRight)}>BR</button>
            </div>
        </div>
    );
};
