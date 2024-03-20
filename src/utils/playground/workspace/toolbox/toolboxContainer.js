import LedToolbox from "@/utils/playground/workspace/toolbox/componet_toolboxes/ledToolbox";
import {forLoop} from "@/utils/playground/workspace/toolbox/core/loopsToolbox";

export const ToolboxContainer = {
    turnOnLed: {
        'kind': 'flyoutToolbox',
        'contents': [
            ...LedToolbox, forLoop
        ]
    }
}
