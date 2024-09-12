import blockKeys from "@/utils/playground/workspace/blocks/blockKeys";
import BlockKeys from "@/utils/playground/workspace/blocks/blockKeys";

// @ts-ignore
import {getSimpleToolboxBlock} from "@/utils/playground/workspace/blocks/blocks";
import {BuzzerState} from "@/modules/playground/components/simulated-hardwares/modules/buzzer/Buzzer";
import {getModuleState} from "@/modules/playground/components/simulated-hardwares/utils/commonUtils";
import {Modules} from "@/modules/playground/components/simulated-hardwares/utils/modulesMap";


//block definitions
const blockDefinitions = {

    [BlockKeys.turnOnBuzzer]: {
        "type": blockKeys.turnOnBuzzer,
        "message0": "Turn on Buzzer",
        "previousStatement": null,
        "nextStatement": null,
"colour": '#eaa8a8',
        "tooltip": "",
        "helpUrl": ""
    },
    [BlockKeys.turnOffBuzzer]: {
        "type": blockKeys.turnOffBuzzer,
        "message0": "Turn off Buzzer",
        "previousStatement": null,
        "nextStatement": null,
"colour": '#eaa8a8',
        "tooltip": "",
        "helpUrl": ""
    }


}


//toolbox blocks


const toolbox = [
    blockKeys.turnOnBuzzer,
    blockKeys.turnOffBuzzer,
]


//code generator
const codeGenerator = {
    [blockKeys.turnOnBuzzer]: () => getBuzzerBlockCode({buzz: true}),
    [blockKeys.turnOffBuzzer]: () => getBuzzerBlockCode({buzz: false}),
};


function getBuzzerBlockCode(payload: BuzzerState) {
    return `await delay(500);\nawait changeState(${getModuleState(Modules.BuzzerModule, payload)});\n`
}

const buzzerBlockConfig = {
    blockDefinitions: blockDefinitions,
    toolBox: toolbox,
    codeGenerator: codeGenerator
}

export default buzzerBlockConfig

