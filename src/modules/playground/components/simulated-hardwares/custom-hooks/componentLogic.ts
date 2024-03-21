import { useEffect } from "react";

export interface ComponentLogic {
    initComponent(): void;
    registerComponent(): void;
    resetComponent(): void;
    processResult(): void;
    isOnDestination: boolean;
    processSuccess(): void;
    processFailure(errorMessage:String): void;
    isCodeCompleted(data:any): boolean;
    displayFailureMessage(message: string): void;
    displaySuccessMessage(message: string): void;
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
