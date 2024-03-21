// NeoPixelMatrix.tsx
import React, {FC, useEffect, useRef, useState} from "react";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import '@wokwi/elements';
import {Position, Direction} from "./types";
import {calculateMove, isValidPosition} from "./NeoPixelUtils";
import {NeopixelMatrixElement} from "@wokwi/elements";
import {resetMessageQueue} from "@/utils/pg-comm-channel.util";
import {RGB} from "@wokwi/elements/dist/cjs/types/rgb";

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
            if (data.hasOwnProperty('completed')) processResult()
            else move(data.Direction);
        });
    }, []);


    function move(direction: Direction): void {
        const newPosition = calculateMove(direction, position);

        if (!isValidPosition(newPosition.row, newPosition.column, matrixSize)) {
            processFailure('out of bounds')
            return;
        }

        position.row = newPosition.row;
        position.column = newPosition.column;
        if (isPixelOnDestination()) {
            processSuccess();
            return;
        }
        setPixel(position);
        return;
    }

    function setPixel(position: Position) {
        neoPixelDisplayRef.current?.setPixel(position.row, position.column, {r: 117, g: 195, b: 141});
    }

    function setPixelWithColor(position: Position, color: RGB) {
        neoPixelDisplayRef.current?.setPixel(position.row, position.column, color);
    }


    function processResult() {
        if (isPixelOnDestination()) {
            processSuccess();
        } else {
            processFailure('not on destination!');
        }
    }

    function processSuccess() {
        resetMessageQueue()
        displayMessage('Completed!');
        resetDisplay()
        setAnimation(true);
    }

    function processFailure(reason: string) {
        resetMessageQueue();
        displayMessage("something went wrong! " + reason);
        initDisplay()
    }

    function displayMessage(message: String) {
        alert(message);
    }

    function isPixelOnDestination() {
        return (destinationPosition.row === position.row && destinationPosition.column === position.column)
    }

    function initDisplay() {
        resetDisplay()
        setPixel(startingPosition);
        setPixelWithColor(destinationPosition, {r: 188, g: 106, b: 102});
    }

    function resetDisplay() {
        position = {...startingPosition}
        neoPixelDisplayRef.current?.reset()
    }


    return (
        <div className={' bg-black flex flex-col gap-4 p-2'}>
            <wokwi-neopixel-matrix ref={neoPixelDisplayRef} rows={matrixSize} cols={matrixSize}
                                   blurLight={true} animation={animation ? true : undefined}></wokwi-neopixel-matrix>
        </div>
    );
};
