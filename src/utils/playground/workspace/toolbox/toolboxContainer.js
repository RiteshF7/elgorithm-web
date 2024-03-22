import LedToolbox from "@/utils/playground/workspace/toolbox/componet_toolboxes/ledToolbox";
import {forLoop} from "@/utils/playground/workspace/toolbox/core/loopsToolbox";
import servoMotorToolbox from "@/utils/playground/workspace/toolbox/componet_toolboxes/servoMotorToolbox";
import buzzerToolbox from "@/modules/playground/components/simulated-hardwares/components/buzzer/buzzerToolbox";

export const ToolboxContainer = {
    turnOnLed: {
        'kind': 'flyoutToolbox',
        'contents': [
            ...LedToolbox, forLoop, ...buzzerToolbox
        ]
    }
}
