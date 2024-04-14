import * as Blockly from 'blockly/core';

import blockKeys from "@/utils/playground/workspace/blocks/blockKeys";

import servoMotorBlockDefinitions
    from "@/modules/playground/components/simulated-hardwares/components/servo-motor/servoMotorBlockDefinitions";

import lightBuzzerBlockDefinitation
    from "@/modules/playground/components/simulated-hardwares/modules/light-buzzer/lightBuzzerBlockDefinitation";
import neopixelBlockConfig
    from "@/modules/playground/components/simulated-hardwares/components/neopixel-display/neopixelBlockConfig";
import ledModuleBlockConfig
    from "@/modules/playground/components/simulated-hardwares/components/led/ledModuleBlockConfig";
import buzzerBlockConfig
    from "@/modules/playground/components/simulated-hardwares/components/buzzer/buzzerModuleBlockConfig";
import servoBlockConfig
    from "@/modules/playground/components/simulated-hardwares/components/servo-motor/servoModuleBlockConfig";


const testBlock = {'type': 'test_block', 'message0': 'example block', 'colour': 160, 'tooltip': '', 'helpUrl': '',};
const blockDefinitionsArray = [testBlock]
const toolBoxBlocks = []


export const blockConfigs = [neopixelBlockConfig,ledModuleBlockConfig,buzzerBlockConfig,servoBlockConfig]

export const forJsBlock = Object.create(null);

for (let key in blockKeys) {
    if (blockKeys.hasOwnProperty(key)) {
        console.log(key + ': ' + blockKeys[key]);
        blockConfigs.forEach((blockConfig) => {

            if (blockConfig['blockDefinitions'].hasOwnProperty(key)) {
                blockDefinitionsArray.push(blockConfig['blockDefinitions'][key])
            }

            if (blockConfig['codeGenerator'].hasOwnProperty(key)) {
                forJsBlock[key] = (blocks, generator) => blockConfig['codeGenerator'][key]();
            }

        })
    }
}


export function getSimpleToolboxBlock(blockKey) {

    return {
        'kind': 'block',
        'type': blockKey
    }

}


console.log(blockDefinitionsArray)
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(blockDefinitionsArray);
// export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(
//     [testBlock, ...neoPixelBlockDefinitions, ...ledBlockDefinitions, ...servoMotorBlockDefinitions, ...buzzerBlockDefinitions, ...lightBuzzerBlockDefinitation]);

