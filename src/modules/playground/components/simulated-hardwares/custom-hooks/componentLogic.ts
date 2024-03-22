import { useEffect } from "react";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import exportApp from "next/dist/export";

export interface ComponentLogic {
    initComponent(): void;
    registerComponent(): void;
    resetComponent(): void;
    processResult(): void;
    isOnDestination: boolean;
    processSuccess(): void;
    processFailure(errorMessage:string): void;
    isCodeCompleted(data:any): boolean;
    displayFailureMessage(message: string): void;
    displaySuccessMessage(message: string): void;
}

export abstract class AbsComponentLogic {
    abstract initComponent(): void;
    abstract registerComponent(): void;
    abstract resetComponent(): void;
    abstract processResult(): void;
    abstract isCompletedSuccessfully():boolean;
    abstract processSuccess(): void;
    abstract processFailure(errorMessage:String): void;
    abstract isCodeCompleted(data:any): boolean;
    abstract displayFailureMessage(message: string): void;
    displaySuccessMessage(message: string){
        console.log(message);
    }
}

export const CommonUtils = ()=>{
    const registerComponent  = usePlayground();
    const registerCustomComponent = (comKey:string,handler:(data: any)=>void) => {
        registerComponent.registerComponent(comKey, handler);
    };

    return {registerComponent}

}

// export const useComponentLogic = (componentLogic: ComponentLogic,componentKey:string) => {
//     useEffect(() => {
//         componentLogic.initComponent();
//         componentLogic.registerComponent(componentKey, (data: any) => {
//             if (componentLogic.isCodeCompleted(data)) {
//                 componentLogic.processResult();
//             }
//         });
//     }, []);
//
//     return {
//         resetComponent: componentLogic.resetComponent,
//         processFailure: componentLogic.processFailure,
//         processSuccess: componentLogic.processSuccess,
//     };
// };
