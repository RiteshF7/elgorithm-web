import * as Blockly from 'blockly/core';

import blockKeys from "@/utils/playground/workspace/blocks/blockKeys";


import neopixelBlockConfig
    from "@/modules/playground/components/simulated-hardwares/modules/neopixel-display/neopixelBlockConfig";
import ledModuleBlockConfig
    from "@/modules/playground/components/simulated-hardwares/modules/led/ledModuleBlockConfig";
import buzzerBlockConfig
    from "@/modules/playground/components/simulated-hardwares/modules/buzzer/buzzerModuleBlockConfig";
import servoBlockConfig
    from "@/modules/playground/components/simulated-hardwares/modules/servo-motor/servoModuleBlockConfig";
import inputsBlockConfig from "@/utils/playground/workspace/toolbox/core/inputs/inputsBlockConfig";


const testBlock = {'type': 'test_block', 'message0': 'example block', 'colour': 160, 'tooltip': '', 'helpUrl': '',};
const blockDefinitionsArray = [testBlock]


export const blockConfigs = [neopixelBlockConfig, ledModuleBlockConfig, buzzerBlockConfig, servoBlockConfig, inputsBlockConfig]

export const forJsBlock = Object.create(null);

for (let key in blockKeys) {
    if (blockKeys.hasOwnProperty(key)) {
        blockConfigs.forEach((blockConfig) => {

            if (blockConfig['blockDefinitions'].hasOwnProperty(key)) {
                blockDefinitionsArray.push(blockConfig['blockDefinitions'][key])
            }

            if (blockConfig['codeGenerator'].hasOwnProperty(key)) {
                forJsBlock[key] = (blocks, generator) => blockConfig['codeGenerator'][key](blocks, generator);
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

export function getPlainToolBox(blockKeys) {
    return blockKeys.map((blockKey) => {
        return getSimpleToolboxBlock(blockKey);
    });
}


console.log(blockDefinitionsArray)
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(blockDefinitionsArray);
// export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(
//     [testBlock, ...neoPixelBlockDefinitions, ...ledBlockDefinitions, ...servoMotorBlockDefinitions, ...buzzerBlockDefinitions, ...lightBuzzerBlockDefinitation]);

