import blockKeys from "@/utils/playground/workspace/blocks/blockKeys";
import BlockKeys from "@/utils/playground/workspace/blocks/blockKeys";
import {LedState} from "@/modules/playground/components/simulated-hardwares/modules/led/Led";
// @ts-ignore
import {getSimpleToolboxBlock} from "@/utils/playground/workspace/blocks/blocks";
import {Modules} from "@/modules/playground/components/simulated-hardwares/utils/modulesMap";
import {getModuleState} from "@/modules/playground/components/simulated-hardwares/utils/commonUtils";
import Blockly from "blockly/core";
import {JavaScript} from "blockly";
import {Order} from "blockly/javascript";
//block definitions
const blockDefinitions = {

    [BlockKeys.lightValue]: {
        "type": blockKeys.lightValue,
        "message0": "light value",
        "output": "Number",
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },

}

//toolbox blocks
const toolbox = [
    blockKeys.lightValue,
]


//code generator
const codeGenerator = {
    lightValue: (blocks:any,generators:any) => {
        var code = 'lightValue';
        return [code, generators.ORDER_NONE];
    }
};


const inputsBlockConfig = {
    blockDefinitions: blockDefinitions,
    toolBox: toolbox,
    codeGenerator: codeGenerator
}

export default inputsBlockConfig

