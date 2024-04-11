import {
    NeoPixelDirect
} from "@/modules/playground/components/simulated-hardwares/components/neopixel-display/NeoPixelDirect";

export enum Modules {
    NeoPixelModule='neo-pixel-module',
    NoModule = 'no-module',

}

export function getModule(module:Modules = Modules.NoModule,runnerConfig:any){
    switch (module){
        case Modules.NeoPixelModule:
            return <NeoPixelDirect {...runnerConfig}/>
    }
}