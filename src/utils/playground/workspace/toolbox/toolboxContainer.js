import LedToolbox from "@/modules/playground/components/simulated-hardwares/components/led/ledToolbox";
import {forLoop} from "@/utils/playground/workspace/toolbox/core/loopsToolbox";
import servoMotorToolbox from "@/modules/playground/components/simulated-hardwares/components/servo-motor/servoMotorToolbox";
import buzzerToolbox from "@/modules/playground/components/simulated-hardwares/components/buzzer/buzzerToolbox";

export const ToolboxContainer = {
    turnOnLed: {
        'kind': 'flyoutToolbox',
        'contents': [
            ...LedToolbox, forLoop, ...buzzerToolbox
        ]
    }
}
