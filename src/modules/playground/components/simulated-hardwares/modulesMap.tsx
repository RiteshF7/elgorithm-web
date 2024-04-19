import {
    NeoPixelDirect
} from "@/modules/playground/components/simulated-hardwares/components/neopixel-display/NeoPixelDirect";
import {LedModule} from "@/modules/playground/components/simulated-hardwares/components/led/LedModule";
import {Buzzer} from "@/modules/playground/components/simulated-hardwares/components/buzzer/Buzzer";
import {ServoMotor} from "@/modules/playground/components/simulated-hardwares/components/servo-motor/ServoMotor";
import React, {FC} from "react";
import {ServoModule} from "@/modules/playground/components/simulated-hardwares/components/servo-motor/ServoModule";

export enum Modules {
    NeoPixelModule='neo-pixel-module',
    LedModule = 'led-module',
    NoModule = 'no-module',
    BuzzerModule = 'buzzer-module',
    ServoModule = 'servo-module',

}

export function getModule(module:Modules = Modules.NoModule,runnerConfig:any){
    switch (module){
        case Modules.NeoPixelModule:
            return <NeoPixelDirect {...runnerConfig}/>
        case Modules.LedModule:
            return <LedModule {...runnerConfig}/>
        case Modules.BuzzerModule:
            return <Buzzer {...runnerConfig}/>
        case Modules.ServoModule:
            return <ServoModule {...runnerConfig}/>
    }
}


