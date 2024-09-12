import blockKeys from "@/utils/playground/workspace/blocks/blockKeys";

import {
    pythonImport,
    PythonImportKey
} from "@/modules/playground/components/simulated-hardwares/modules/common/commonModules";

//block definitions
const blockDefinitions = {

    [blockKeys.delay]: {
        "type": blockKeys.delay,
        "message0": "delay %1 ms",
        "args0": [
            {
                "type": "input_value",  
                "name": "DELAY_TIME",   
                "check": "Number"     
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": '#eaa8a8',
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

