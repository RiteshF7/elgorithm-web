// NeoPixelViewModel.tsx
import {useEffect, useRef, useState} from "react";
import {calculateMove, isValidPosition} from "./NeoPixelUtils";
import {ControllerType, Direction, MatrixType, TestCase} from "./types";
import {NeopixelMatrixElement} from "@wokwi/elements";
import {RGB} from "@wokwi/elements/dist/cjs/types/rgb";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import _ from 'lodash'
import neopixelBlockConfig
    from "@/modules/playground/components/simulated-hardwares/components/neopixel-display/neopixelBlockConfig";
import {useModuleBaseViewModel} from "@/modules/playground/components/simulated-hardwares/utils/ModuleBaseViewModel";


interface NeoPixelViewModelProps {
    matrixSize: number;
    matrixType: MatrixType;
    controllerType: ControllerType;
    testCase: TestCase;
}


export const useNeoPixelViewModel = ({matrixSize, matrixType, testCase, controllerType}: NeoPixelViewModelProps) => {

    const {getJsCode, moveToNextLevel} = usePlayground();
    const row = 0, column = 1;
    const input = testCase.input[0];
    const neoPixelDisplayRef = useRef<NeopixelMatrixElement>(null);
    const startingPosition = [input[row], input[column]];
    const [animation, setAnimation] = useState<boolean>(false);
    let position = [...startingPosition];
    let actualPixelPath: any[] = [];

    const {executeCode,getCompletionStatus} = useModuleBaseViewModel()

    useEffect(() => {

        initDisplay();
        if (controllerType === ControllerType.keyboard) window.addEventListener("keydown", handleKeyboardEvents);
        return () => {
            window.removeEventListener("keydown", handleKeyboardEvents);
        };
    }, []);

    function handleKeyboardEvents(event: KeyboardEvent) {
        event.preventDefault()
        switch (event.key) {
            case "ArrowUp":
                move(Direction.Up);
                break;
            case "ArrowDown":
                move(Direction.Down);
                break;
            case "ArrowLeft":
                move(Direction.Left);
                break;
            case "ArrowRight":
                move(Direction.Right);
                break;
            default:
                break;
        }
    }



    function handleCodeCompletion() {
        if(actualPixelPath.length===0) return handleFailure()
        let expectedPixelPath = getExpectedPath()
        const result = getCompletionStatus(expectedPixelPath,actualPixelPath)
        if(result.status) handleSuccess()
        else handleFailure()
    }

    function executeBlockCode() {
        executeCode([move],['move'],handleCodeCompletion)
    }


    function initDisplay() {
        neoPixelDisplayRef.current?.reset();
        position = [...startingPosition];
        actualPixelPath = []
        testCase.input.forEach((position: number[]) => {
            setPixelWithColor(position, getRandomColor());
        });
    }

    function handleSuccess() {
        initDisplay();
        moveToNextLevel('next level id')
    }

    function handleFailure() {
        initDisplay();
    }

    function move(direction: Direction): void {

        const newPosition = calculateMove(direction, position);
        if (!isValidPosition(newPosition[row], newPosition[column], matrixSize)) {
            console.log("invalid move!");
            handleFailure()
            return;
        }
        position[row] = newPosition[row];
        position[column] = newPosition[column];
        actualPixelPath.push([...position])
        setPixel(position);
    }

    function getExpectedPath(): any[] {

        switch (matrixType) {
            case MatrixType.BI_DIRECTIONAL:
                const matchingPath = testCase.expectedOutput.find((path) =>
                    isPixelEqual(actualPixelPath[0], path[0])
                );
                if (matchingPath) return matchingPath;
                return [];
            case MatrixType.UNI_DIRECTIONAL:
                return testCase.expectedOutput;
            default:
                break;
        }
        return [];
    }


    function isPixelEqual(actualPosition: number[], expectedPosition: any) {
        return actualPosition.every(
            (value, index) => value === expectedPosition[index]
        );
    }

    function setPixel(position: number[]) {
        neoPixelDisplayRef.current?.setPixel(position[row], position[column], {
            r: 117,
            g: 195,
            b: 141,
        });
    }

    const colors: RGB[] = [
        {r: 188, g: 106, b: 102},
        {r: 190, g: 104, b: 170},
        {r: 117, g: 195, b: 141},
        {r: 106, g: 168, b: 194},
        {r: 131, g: 115, b: 195},
    ];

    function getRandomColor(): RGB {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    function setPixelWithColor(position: number[], color: RGB) {
        neoPixelDisplayRef.current?.setPixel(
            position[row],
            position[column],
            color
        );
    }

    return {neoPixelDisplayRef, animation, executeBlockCode};
};
