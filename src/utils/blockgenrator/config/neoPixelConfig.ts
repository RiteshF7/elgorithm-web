import {TemplateConfig,generateControllerFile} from "../generators/SimHwControllerCodeGenerator";
import {Direction} from "@/modules/playground/components/simulated-hardwares/neopixel-display/types";

export const neoPixelConfig: TemplateConfig = {
    componentName: 'neoPixel',
    filePath: 'src/modules/playground/components/simulated-hardwares/neopixel-display/neoPixelController.ts',
    componentKey: 'NEO_PIXEL_MATRIX',
    controllerData: [
        {funcName: "moveUp", payload: {direction: Direction.Up},delay:200},
        {funcName: "moveDown", payload: {direction: 'Direction.Down'},delay:0},
        {funcName: "moveLeft", payload: {direction: 'Direction.Left'},delay:200},
        {funcName: "moveRight", payload: {direction: 'Direction.Right'},delay:200},
        {funcName: "moveTopLeft", payload: {direction: 'Direction.TopLeft'},delay:200},
        {funcName: "moveTopRight", payload: {direction: 'Direction.TopRight'},delay:200},
        {funcName: "moveBottomLeft", payload: {direction: 'Direction.BottomLeft'},delay:200},
        {funcName: "moveBottomRight", payload: {direction: 'Direction.BottomRight'},delay:200},
    ],
};

generateControllerFile(neoPixelConfig);



