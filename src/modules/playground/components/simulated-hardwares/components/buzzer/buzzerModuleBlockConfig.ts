//add buzzer module to working
//use same viewmodel as led and make vieodel generic and rename and shift

import blockKeys from "@/utils/playground/workspace/blocks/blockKeys";
import BlockKeys from "@/utils/playground/workspace/blocks/blockKeys";
import {LedConfig} from "@/modules/playground/components/simulated-hardwares/components/led/Led";
// @ts-ignore
import {getSimpleToolboxBlock} from "@/utils/playground/workspace/blocks/blocks";
import {BuzzerState} from "@/modules/playground/components/simulated-hardwares/components/buzzer/Buzzer";
//block definitions
const blockDefinitions = {

    [BlockKeys.turnOnBuzzer]: {
        "type": blockKeys.turnOnBuzzer,
        "message0": "Turn on Buzzer",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    [BlockKeys.turnOffBuzzer]: {
        "type": blockKeys.turnOffBuzzer,
        "message0": "Turn off Buzzer",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    }


}

//toolbox blocks



const toolbox = [
    getSimpleToolboxBlock(blockKeys.turnOnBuzzer),
    getSimpleToolboxBlock(blockKeys.turnOffBuzzer),
]


//code generator
const codeGenerator = {
    [blockKeys.turnOnBuzzer]: () => getLedBlockCode({state:true}),
    [blockKeys.turnOffBuzzer]: () => getLedBlockCode({state:false}),
};



function getLedBlockCode(payload: BuzzerState) {
    let payloadString = JSON.stringify(payload);
    return `await delay(200);\nawait changeState(${payloadString});\n`
}

const buzzerBlockConfig = {
    blockDefinitions: blockDefinitions,
    toolBox: toolbox,
    codeGenerator: codeGenerator
}

export default buzzerBlockConfig

