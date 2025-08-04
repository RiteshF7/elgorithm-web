import { Modules } from '@/modules/playground/components/simulated-hardwares/utils/modulesMap';
import NeopixelBlockConfig from '@/modules/playground/components/simulated-hardwares/modules/neopixel-display/neopixelBlockConfig';
import LedModuleBlockConfig from '@/modules/playground/components/simulated-hardwares/modules/led/ledModuleBlockConfig';
import BuzzerModuleBlockConfig from '@/modules/playground/components/simulated-hardwares/modules/buzzer/buzzerModuleBlockConfig';
import ServoModuleBlockConfig from '@/modules/playground/components/simulated-hardwares/modules/servo-motor/servoModuleBlockConfig';

export const hardwareMap: { [key: string]: any } = {
    'neopixel': {
        module: Modules.NeoPixelModule,
        blockConfig: NeopixelBlockConfig,
    },
    'led': {
        module: Modules.LedModule,
        blockConfig: LedModuleBlockConfig,
    },
    'buzzer': {
        module: Modules.BuzzerModule,
        blockConfig: BuzzerModuleBlockConfig,
    },
    'servo': {
        module: Modules.ServoModule,
        blockConfig: ServoModuleBlockConfig,
    },
};
