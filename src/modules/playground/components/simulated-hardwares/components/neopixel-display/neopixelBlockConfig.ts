import blockKeys from "@/utils/playground/workspace/blocks/blockKeys";
import BlockKeys from "@/utils/playground/workspace/blocks/blockKeys";
import {Direction} from "@/modules/playground/components/simulated-hardwares/components/neopixel-display/types";
//block definitions
const blockDefinitions = {

        [blockKeys.moveUp]: {
            "type": blockKeys.moveUp,
            "message0": "Move up",
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
        }
    ,

        [blockKeys.moveDown]: {
            "type": blockKeys.moveDown,
            "message0": "Move down",
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
        }
    ,

        [blockKeys.moveRight]: {
            "type": blockKeys.moveRight,
            "message0": "Move right",
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
        }
    ,

        [blockKeys.moveLeft]: {
            "type": blockKeys.moveLeft,
            "message0": "Move left",
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
        },

[blockKeys.moveTopLeft]: {
            "type": blockKeys.moveTopLeft,
            "message0": "Move top left",
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
        },

[blockKeys.moveTopRight]: {
            "type": blockKeys.moveTopRight,
            "message0": "Move top right",
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
        },

[blockKeys.moveBottomLeft]: {
            "type": blockKeys.moveBottomLeft,
            "message0": "Move bottom left",
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
        },

[blockKeys.moveBottomRight]: {
            "type": blockKeys.moveBottomRight,
            "message0": "Move bottom right",
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
        },


}

//toolbox blocks

function getToolboxBlock(blockKey: string): any {
    return {
        'kind': 'block',
        'type': blockKey
    }

}

const straightToolbox = [
    getToolboxBlock(blockKeys.moveDown),
    getToolboxBlock(blockKeys.moveRight),
    getToolboxBlock(blockKeys.moveUp),
    getToolboxBlock(blockKeys.moveLeft),
]
const verticalToolbox = [
    getToolboxBlock(blockKeys.moveBottomLeft),
    getToolboxBlock(blockKeys.moveBottomRight),
    getToolboxBlock(blockKeys.moveTopLeft),
    getToolboxBlock(blockKeys.moveTopRight),
]


//code generator
const codeGenerator = {
    moveUp: () => getBlockCode(Direction.Up),
    moveDown: () => getBlockCode(Direction.Down),
    moveLeft: () => getBlockCode(Direction.Left),
    moveRight: () => getBlockCode(Direction.Right),
    moveTopLeft: () => getBlockCode(Direction.TopLeft),
    moveTopRight: () => getBlockCode(Direction.TopRight),
    moveBottomLeft: () => getBlockCode(Direction.BottomLeft),
    moveBottomRight: () => getBlockCode(Direction.BottomRight),
    stop: () => getBlockCode(Direction.Stop),
};

function getBlockCode(payload: Direction) {
    return `await delay(200);\nmove('${payload}');\n`
}

const neopixelBlockConfig = {
    blockDefinitions: blockDefinitions,
    toolBox: straightToolbox,
    codeGenerator: codeGenerator
}

export default neopixelBlockConfig

