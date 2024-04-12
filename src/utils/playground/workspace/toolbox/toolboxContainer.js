import LedToolbox from "@/modules/playground/components/simulated-hardwares/components/led/ledToolbox";
import servoMotorToolbox
    from "@/modules/playground/components/simulated-hardwares/components/servo-motor/servoMotorToolbox";
import buzzerToolbox from "@/modules/playground/components/simulated-hardwares/components/buzzer/buzzerToolbox";
import lightBuzzerToolbox
    from "@/modules/playground/components/simulated-hardwares/modules/light-buzzer/lightBuzzerToolbox";
import {variableToolbox} from "@/utils/playground/workspace/toolbox/core/variablesToolbox";
import {ifElseToolbox} from "@/utils/playground/workspace/toolbox/core/ifElse";
import ledToolbox from "@/modules/playground/components/simulated-hardwares/components/led/ledToolbox";
import NeopixelBlockConfig
    from "@/modules/playground/components/simulated-hardwares/components/neopixel-display/neopixelBlockConfig";


export const ToolboxContainer = {

    'kind': 'flyoutToolbox',
    'contents': [
        ...NeopixelBlockConfig.toolBox]

}
