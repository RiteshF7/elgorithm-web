import LedToolbox from "@/modules/playground/components/simulated-hardwares/components/led/ledToolbox";
import {forLoop} from "@/utils/playground/workspace/toolbox/core/loopsToolbox";
import servoMotorToolbox
    from "@/modules/playground/components/simulated-hardwares/components/servo-motor/servoMotorToolbox";
import buzzerToolbox from "@/modules/playground/components/simulated-hardwares/components/buzzer/buzzerToolbox";
import neoPixelToolbox
    from "@/modules/playground/components/simulated-hardwares/components/neopixel-display/neoPixelToolbox";
import lightBuzzerToolbox
    from "@/modules/playground/components/simulated-hardwares/modules/light-buzzer/lightBuzzerToolbox";
import {variableToolbox} from "@/utils/playground/workspace/toolbox/core/variablesToolbox";
import {ifElseToolbox} from "@/utils/playground/workspace/toolbox/core/ifElse";

export const ToolboxContainer = {

    'kind': 'flyoutToolbox',
    'contents': [
        ...variableToolbox,...LedToolbox, forLoop, ...lightBuzzerToolbox]

}
