import blockKeys from "@/utils/playground/workspace/blocks/blockKeys";
import BlockKeys from "@/utils/playground/workspace/blocks/blockKeys";
import {LedState} from "@/modules/playground/components/simulated-hardwares/modules/led/Led";
// @ts-ignore
import {getSimpleToolboxBlock} from "@/utils/playground/workspace/blocks/blocks";
import {Modules} from "@/modules/playground/components/simulated-hardwares/utils/modulesMap";
import {getModuleState} from "@/modules/playground/components/simulated-hardwares/utils/commonUtils";
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
    blockKeys.turnOnLed,
    blockKeys.turnOffLed,
    blockKeys.blinkLed,
]


//code generator
const codeGenerator = {
    turnOnLed: () => getLedBlockCode({active: true, color: 'red'}),
    turnOffLed: () => getLedBlockCode({active: false, color: 'red'}),
    blinkLed: () => getLedBlockCode({active: true, color: 'red'}) + getLedBlockCode({active: false, color: 'red'})
};


function getLedBlockCode(payload: LedState) {
    return `await delay(400);\nawait changeState(${getModuleState(Modules.LedModule, payload)});\n`
}

const ledBlockConfig = {
    blockDefinitions: blockDefinitions,
    toolBox: toolbox,
    codeGenerator: codeGenerator
}

export default ledBlockConfig

