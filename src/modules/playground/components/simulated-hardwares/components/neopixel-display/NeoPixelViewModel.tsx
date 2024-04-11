// NeoPixelViewModel.tsx
import {useEffect, useRef, useState} from "react";
import {calculateMove, isValidPosition} from "./NeoPixelUtils";
import {ControllerType, Direction, MatrixType, TestCase} from "./types";
import {NeopixelMatrixElement} from "@wokwi/elements";
import {RGB} from "@wokwi/elements/dist/cjs/types/rgb";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import neopixelBlockConfig
    from "@/modules/playground/components/simulated-hardwares/components/neopixel-display/neopixelBlockConfig";




interface NeoPixelViewModelProps  {
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
    let step = 0;
    let expectedPixelPath: any[] = [];

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

    function executeCode(code: string) {
        const execute = new Function('move','handleCodeCompletion', code)
        execute(move,handleCodeCompletion);
    }

    function handleCodeCompletion() {
        console.log("code completed",step,expectedPixelPath);

        //no steps performed
        if(step === 0){
            handleFailure();
            return;
        }

        if (step === expectedPixelPath.length) {
            handleSuccess();
            return;
        }

        //less step performed
        if(step < expectedPixelPath.length ){
            handleFailure()
            return;
        }

    }

    function executeBlockCode() {
        let code = getJsCode()
        if (code) executeCode(code)
        else console.log("no code")
    }


    function initDisplay() {
        neoPixelDisplayRef.current?.reset();
        position = [...startingPosition];
        step = 0;
        expectedPixelPath = [];
        testCase.input.forEach((position: number[]) => {
            setPixelWithColor(position, getRandomColor());
        });
    }

    function handleSuccess() {
        initDisplay();
        moveToNextLevel('next level id')
        // setAnimation(true);
    }

    function handleFailure() {
        console.log("failure!");
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
        if (isValidStep(position)) {
            setPixel(position);
            return;
        }
        handleFailure();
    }

    function setExpectedPath(actualPosition: number[]) {
        if (step === 0) {
            switch (matrixType) {
                case MatrixType.BI_DIRECTIONAL:
                    const matchingPath = testCase.expectedOutput.find((path) =>
                        isPixelEqual(actualPosition, path[0])
                    );
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
