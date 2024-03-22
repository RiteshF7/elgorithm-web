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

