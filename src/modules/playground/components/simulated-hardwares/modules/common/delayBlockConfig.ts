import blockKeys from "@/utils/playground/workspace/blocks/blockKeys";
import BlockKeys from "@/utils/playground/workspace/blocks/blockKeys";

import {
    pythonImport,
    PythonImportKey
} from "@/modules/playground/components/simulated-hardwares/modules/common/commonModules";

//block definitions
const blockDefinitions = {

    [BlockKeys.turnOnLed]: {
        "type": blockKeys.delay,
        "message0": "delay",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    }

}

//toolbox blocks
const toolbox = [
    blockKeys.delay
]


//code generator
// const jsCodeGenerator = {

// };

const pyCodeGenerator = {
    delay: () => getPyLedCode(1),
};

function getPyLedCode(value: number) {
    pythonImport(PythonImportKey.TIME)
    return 'time.sleep(' + value + ')\n';
}


const delayBlockConfig = {
    blockDefinitions: blockDefinitions,
    toolBox: toolbox,
    pyCodeGenerator: pyCodeGenerator
}

export default delayBlockConfig

