import blockKeys from "@/utils/playground/workspace/blocks/blockKeys";
import BlockKeys from "@/utils/playground/workspace/blocks/blockKeys";
import {LedConfig} from "@/modules/playground/components/simulated-hardwares/components/led/Led";
// @ts-ignore
import {getSimpleToolboxBlock} from "@/utils/playground/workspace/blocks/blocks";
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



const toolbox = [
    getSimpleToolboxBlock(blockKeys.turnOnLed),
    getSimpleToolboxBlock(blockKeys.turnOffLed),
    getSimpleToolboxBlock(blockKeys.blinkLed),
]


//code generator
const codeGenerator = {
    turnOnLed: () => getLedBlockCode({active:true,color:'red'}),
    turnOffLed: () => getLedBlockCode({active:false,color:'red'}),
    blinkLed: () => getLedBlockCode({active: true, color: 'red'}) + getLedBlockCode({active: false, color: 'red'})
};



function getLedBlockCode(payload: LedConfig) {
    let payloadString = JSON.stringify(payload);
    return `await delay(200);\nawait changeState(${payloadString});\n`
}

const ledBlockConfig = {
    blockDefinitions: blockDefinitions,
    toolBox: toolbox,
    codeGenerator: codeGenerator
}

export default ledBlockConfig

