import LedToolbox from "@/modules/playground/components/simulated-hardwares/components/led/ledToolbox";
import {forLoop} from "@/utils/playground/workspace/toolbox/core/loopsToolbox";
import servoMotorToolbox from "@/modules/playground/components/simulated-hardwares/components/servo-motor/servoMotorToolbox";
import buzzerToolbox from "@/modules/playground/components/simulated-hardwares/components/buzzer/buzzerToolbox";
import neoPixelToolbox
    from "@/modules/playground/components/simulated-hardwares/components/neopixel-display/neoPixelToolbox";

export const ToolboxContainer = {
    turnOnLed: {
        'kind': 'flyoutToolbox',
        'contents': [
            ...LedToolbox, forLoop, ...servoMotorToolbox
        ]
    }
}
