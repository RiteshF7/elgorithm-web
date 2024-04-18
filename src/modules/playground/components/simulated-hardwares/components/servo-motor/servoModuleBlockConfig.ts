import blockKeys from "@/utils/playground/workspace/blocks/blockKeys";
import BlockKeys from "@/utils/playground/workspace/blocks/blockKeys";
// @ts-ignore
import {getSimpleToolboxBlock} from "@/utils/playground/workspace/blocks/blocks";

//block definitions
const blockDefinitions = {

    [BlockKeys.turnServoRight]: {
        "type": blockKeys.turnServoRight,
        "message0": "Turn servo right",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    [BlockKeys.turnServoLeft]: {
        "type": blockKeys.turnServoLeft,
        "message0": "Turn servo left",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    }


}

//toolbox blocks



const toolbox = [
    getSimpleToolboxBlock(blockKeys.turnServoLeft),
    getSimpleToolboxBlock(blockKeys.turnServoRight),
]


//code generator
const codeGenerator = {
    [blockKeys.turnServoRight]: () => getServoRightBlockCode(),
    [blockKeys.turnServoLeft]: () => getServoLeftBlockCode(),
};



function getServoLeftBlockCode() {
    return `await delay(200);
    degree = (degree - 45) % 360
    \nawait changeState(degree);\n`
}
function getServoRightBlockCode() {
    return `await delay(200);
    degree = (degree + 45) % 360
    \nawait changeState(degree);\n`
}

const servoBlockConfig = {
    blockDefinitions: blockDefinitions,
    toolBox: toolbox,
    codeGenerator: codeGenerator
}

export default servoBlockConfig

