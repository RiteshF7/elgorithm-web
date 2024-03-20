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


export const COMPONENT_KEY = 'NEO_PIXEL_MATRIX';

export const NeoPixelMatrix: FC<NeoPixelMatrixProps> = ({startingPosition, destinationPosition, matrixSize,}) => {

    const [animation, setAnimation] = useState<boolean>(false);

    const {registerComponent} = usePlayground();
    const neoPixelDisplayRef = useRef<NeopixelMatrixElement>(null);
    let position = {...startingPosition};

    useEffect(() => {

        initDisplay()
        registerComponent(COMPONENT_KEY, (data) => {
            if (data.hasOwnProperty('completed')) {
                processResult()
            } else {
                move(data.Direction);
            }

        });
    }, []);


    function move(direction: Direction): void {
        const newPosition = calculateMove(direction, position);

        if (isValidPosition(newPosition.row, newPosition.column, matrixSize)) {
            position.row = newPosition.row;
            position.column = newPosition.column;
            setPixel(position);
        }
    }

    function setPixel(position: Position) {
        neoPixelDisplayRef.current?.setPixel(position.row, position.column, {r: 225, g: 0, b: 0});
    }


    function processResult() {
        if (destinationPosition.row === position.row && destinationPosition.column === position.column) {
            processSuccess();
        } else {
            processFailure();
        }
    }

    function processSuccess() {
        console.log('success');
        alert('Completed successfully!');
        position = {...startingPosition}
        neoPixelDisplayRef.current?.reset()
        setAnimation(true);
    }

    function processFailure() {
        alert('Something went wrong!');
        initDisplay()
    }

    function initDisplay() {
        position = {...startingPosition}
        neoPixelDisplayRef.current?.reset()
        setPixel(startingPosition);
        setPixel(destinationPosition);
    }


    return (
        <div className={' bg-black flex flex-col gap-4 p-2'}>
            <wokwi-neopixel-matrix ref={neoPixelDisplayRef} rows={matrixSize} cols={matrixSize}
                                   blurLight={true} animation={animation ? true : undefined}></wokwi-neopixel-matrix>
        </div>
    );
};
