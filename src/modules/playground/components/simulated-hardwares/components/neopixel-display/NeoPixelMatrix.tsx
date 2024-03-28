// NeoPixelMatrix.tsx
import React, {FC, useEffect, useRef, useState} from "react";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import '@wokwi/elements';
import {Position, Direction} from "./types";
import {calculateMove, isValidPosition} from "./NeoPixelUtils";
import {NeopixelMatrixElement} from "@wokwi/elements";
import {resetMessageQueue} from "@/utils/pg-comm-channel.util";
import {RGB} from "@wokwi/elements/dist/cjs/types/rgb";
import SHCUtils from "@/modules/playground/components/simulated-hardwares/utils/commonUtils";

interface NeoPixelMatrixProps {
    startingPosition: Position;
    destinationPosition: Position;
    matrixSize: number;
}


export const COMPONENT_KEY = 'NEO_PIXEL_MATRIX';

export const NeoPixelMatrix: FC<NeoPixelMatrixProps> = ({startingPosition, destinationPosition, matrixSize,}) => {

    const [animation, setAnimation] = useState<boolean>(false);
    const neoPixelDisplayRef = useRef<NeopixelMatrixElement>(null);
    let position = {...startingPosition};
    const shcUtils = new SHCUtils(COMPONENT_KEY, startingPosition, destinationPosition, handleSuccess, handleFailure)


    useEffect(() => {

        initDisplay()
        shcUtils.initComponent(handlePayload)

    }, []);

    function initDisplay() {
        neoPixelDisplayRef.current?.reset()
        position = {...startingPosition}
        setPixel(startingPosition);
        setPixelWithColor(destinationPosition, {r: 188, g: 106, b: 102});
    }

    function handlePayload(data: any) {
        move(data.direction)
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
            shcUtils.failure('pixel out of bound!',handleFailure)
            return;
        }

        position.row = newPosition.row;
        position.column = newPosition.column;
        shcUtils.updateState(position)
        setPixel(position);

        return;
    }

    function setPixel(position: Position) {
        neoPixelDisplayRef.current?.setPixel(position.row, position.column, {r: 117, g: 195, b: 141});
    }

    function setPixelWithColor(position: Position, color: RGB) {
        neoPixelDisplayRef.current?.setPixel(position.row, position.column, color);
    }

    return (
        <div className={' bg-black flex flex-col gap-4 p-2'}>
            <wokwi-neopixel-matrix ref={neoPixelDisplayRef} rows={matrixSize} cols={matrixSize}
                                   blurLight={true} animation={animation ? true : undefined}></wokwi-neopixel-matrix>
        </div>
    );
};
