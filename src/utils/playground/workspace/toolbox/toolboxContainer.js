import lightBuzzerToolbox
    from "@/modules/playground/components/simulated-hardwares/modules/light-buzzer/lightBuzzerToolbox";
import {variableToolbox} from "@/utils/playground/workspace/toolbox/core/variablesToolbox";
import {ifElseToolbox} from "@/utils/playground/workspace/toolbox/core/ifElse";
import NeopixelBlockConfig
    from "@/modules/playground/components/simulated-hardwares/components/neopixel-display/neopixelBlockConfig";


export const ToolboxContainer = {

    'kind': 'flyoutToolbox',
    'contents': [
        ...NeopixelBlockConfig.toolBox]

}
