import blockKeys from "@/utils/playground/workspace/blocks/blockKeys";
import BlockKeys from "@/utils/playground/workspace/blocks/blockKeys";
import {LedState} from "@/modules/playground/components/simulated-hardwares/modules/led/Led";
// @ts-ignore
import {Modules} from "@/modules/playground/components/simulated-hardwares/utils/modulesMap";
import {getModuleState} from "@/modules/playground/components/simulated-hardwares/utils/commonUtils";
import {
    pythonFunction,
    PythonFunctionKey,
    pythonImport,
    PythonImportKey
} from "@/modules/playground/components/simulated-hardwares/modules/common/commonModules";

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
const jsCodeGenerator = {
    turnOnLed: () => getLedBlockCode({active: false, color: 'red'}),
    turnOffLed: () => getLedBlockCode({active: false, color: 'red'}),
    blinkLed: () => getLedBlockCode({active: true, color: 'red'}) + getLedBlockCode({active: false, color: 'red'})
};

const pyCodeGenerator = {
    turnOnLed: () => getPyLedCode(1),
    turnOffLed: () => getPyLedCode(0),
    blinkLed: () => getPyLedCode(1) + getPyLedCode(0),
};

function getPyLedCode(value: number) {
    pythonImport(PythonImportKey.PIN)
    pythonFunction(PythonFunctionKey.GPIO_SET)
    return 'gpio_set(' + 2 + ', ' + value + ')\n';
}


function getLedBlockCode(payload: LedState) {
    return `await delay(400);\nawait changeState(${getModuleState(Modules.LedModule, payload)});\n`
}

const ledBlockConfig = {
    blockDefinitions: blockDefinitions,
    toolBox: toolbox,
    jsCodeGenerator: jsCodeGenerator,
    pyCodeGenerator: pyCodeGenerator
}

export default ledBlockConfig

