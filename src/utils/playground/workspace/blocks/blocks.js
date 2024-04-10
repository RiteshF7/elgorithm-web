import * as Blockly from 'blockly/core';
import neoPixelBlockDefinitions
    from "@/modules/playground/components/simulated-hardwares/components/neopixel-display/neoPixelBlockDefinitions";
import blockKeys from "@/utils/playground/workspace/blocks/blockKeys";
import ledBlockDefinitions
    from "@/modules/playground/components/simulated-hardwares/components/led/ledBlockDefinitions";
import servoMotorBlockDefinitions
    from "@/modules/playground/components/simulated-hardwares/components/servo-motor/servoMotorBlockDefinitions";
import buzzerBlockDefinitions
    from "@/modules/playground/components/simulated-hardwares/components/buzzer/buzzerBlockDefinitions";
import lightBuzzerBlockDefinitation
    from "@/modules/playground/components/simulated-hardwares/modules/light-buzzer/lightBuzzerBlockDefinitation";
import neopixelBlockConfig
    from "@/modules/playground/components/simulated-hardwares/components/neopixel-display/neopixelBlockConfig";
import neoPixelController
    from "@/modules/playground/components/simulated-hardwares/components/neopixel-display/neoPixelBlockController";


const testBlock = {'type': 'test_block', 'message0': 'example block', 'colour': 160, 'tooltip': '', 'helpUrl': '',};
const blockDefinitionsArray = [testBlock]


export const blockConfigs = [neopixelBlockConfig]

export const forJsBlock = Object.create(null);

for (let key in blockKeys) {
    if (blockKeys.hasOwnProperty(key)) {
        console.log(key + ': ' + blockKeys[key]);
        blockConfigs.forEach((blockConfig) => {
            console.log(blockConfig['blockDefinitions'],key,'ss')
            if (blockConfig['blockDefinitions'].hasOwnProperty(key)) {
                blockDefinitionsArray.push(blockConfig['blockDefinitions'][key])
                forJsBlock[key] = (blocks, generator) => blockConfig['codeGenerator'][key]();
            }
        })
    }
}

console.log(blockDefinitionsArray)
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(blockDefinitionsArray);
// export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(
//     [testBlock, ...neoPixelBlockDefinitions, ...ledBlockDefinitions, ...servoMotorBlockDefinitions, ...buzzerBlockDefinitions, ...lightBuzzerBlockDefinitation]);

