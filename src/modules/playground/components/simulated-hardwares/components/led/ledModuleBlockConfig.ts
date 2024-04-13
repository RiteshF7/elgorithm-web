import blockKeys from "@/utils/playground/workspace/blocks/blockKeys";
import BlockKeys from "@/utils/playground/workspace/blocks/blockKeys";
import {Direction} from "@/modules/playground/components/simulated-hardwares/components/neopixel-display/types";
import {LedConfig} from "@/modules/playground/components/simulated-hardwares/components/led/Led";
//block definitions
const blockDefinitions = {

    [BlockKeys.turnOnLed]: {
        "type": blockKeys.turnOnLed,
        "message0": "Turn on led",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    [BlockKeys.turnOffLed]: {
        "type": blockKeys.turnOffLed,
        "message0": "Turn off led",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    [BlockKeys.blinkLed]: {
        "type": blockKeys.blinkLed,
        "message0": "Blink led",
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

const toolbox = [
    getToolboxBlock(blockKeys.turnOnLed),
    getToolboxBlock(blockKeys.turnOffLed),
    getToolboxBlock(blockKeys.blinkLed),
]


//code generator
const codeGenerator = {
    turnOnLed: () => getBlockCode({active:true,color:'red'}),
    turnOffLed: () => getBlockCode({active:false,color:'red'}),
    blinkLed: () => getBlockCode({active: true, color: 'red'}) + getBlockCode({active: false, color: 'red'})
};

function getBlockCode(payload: LedConfig) {
    let payloadString = JSON.stringify(payload);
    return `await delay(200);\nawait changeLedState(${payloadString});\n`
}

const ledBlockConfig = {
    blockDefinitions: blockDefinitions,
    toolBox: toolbox,
    codeGenerator: codeGenerator
}

export default ledBlockConfig

