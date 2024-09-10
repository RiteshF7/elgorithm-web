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
import {PythonImports} from "@/modules/playground/components/simulated-hardwares/modules/common/commonModules";
import {pythonGenerator} from "blockly/python";
import delayBlockConfig from "@/modules/playground/components/simulated-hardwares/modules/common/delayBlockConfig";


const testBlock = {'type': 'test_block', 'message0': 'example block', 'colour': 160, 'tooltip': '', 'helpUrl': '',};
const blockDefinitionsArray = [testBlock]


export const blockConfigs = [neopixelBlockConfig, ledModuleBlockConfig, buzzerBlockConfig, servoBlockConfig, inputsBlockConfig,delayBlockConfig]

export const forJsBlock = Object.create(null);
export const forPyBlock = Object.create(null);
const JS_GENERATOR = 'jsCodeGenerator'
const PY_GENERATOR = 'pyCodeGenerator'



for (let key in blockKeys) {
    if (blockKeys.hasOwnProperty(key)) {
        blockConfigs.forEach((blockConfig) => {

            if (blockConfig['blockDefinitions'].hasOwnProperty(key)) {
                blockDefinitionsArray.push(blockConfig['blockDefinitions'][key])
            }

            if (blockConfig.hasOwnProperty(JS_GENERATOR)){
                if (blockConfig[JS_GENERATOR].hasOwnProperty(key)) {
                    forJsBlock[key] = (blocks, generator) => blockConfig[JS_GENERATOR][key](blocks, generator);
                }
            }
            if (blockConfig.hasOwnProperty(PY_GENERATOR)){
                if (blockConfig[PY_GENERATOR].hasOwnProperty(key)) {
                    forPyBlock[key] = (blocks, generator) => blockConfig[PY_GENERATOR][key](blocks, generator);
                }
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

