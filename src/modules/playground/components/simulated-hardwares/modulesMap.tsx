import {
    NeoPixelDirect
} from "@/modules/playground/components/simulated-hardwares/components/neopixel-display/NeoPixelDirect";
import {LedModule} from "@/modules/playground/components/simulated-hardwares/components/led/LedWrapper";

export enum Modules {
    NeoPixelModule='neo-pixel-module',
    LedModule = 'led-module',
    NoModule = 'no-module',

}

export function getModule(module:Modules = Modules.NoModule,runnerConfig:any){
    switch (module){
        case Modules.NeoPixelModule:
            return <NeoPixelDirect {...runnerConfig}/>
        case Modules.LedModule:
            return <LedModule {...runnerConfig}/>
    }
}