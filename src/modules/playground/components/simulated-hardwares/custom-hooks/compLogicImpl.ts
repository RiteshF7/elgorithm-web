import {AbsComponentLogic} from "@/modules/playground/components/simulated-hardwares/custom-hooks/componentLogic";

export class CompLogicImpl extends AbsComponentLogic{
    isCompletedSuccessfully(): boolean {
        throw new Error("Method not implemented.");
    }
    initComponent(): void {
        throw new Error("Method not implemented.");
    }
    registerComponent(): void {
        throw new Error("Method not implemented.");
    }
    resetComponent(): void {
        throw new Error("Method not implemented.");
    }
    processResult(): void {
        throw new Error("Method not implemented.");
    }

    processSuccess(): void {
        throw new Error("Method not implemented.");
    }
    processFailure(errorMessage: String): void {
        throw new Error("Method not implemented.");
    }
    isCodeCompleted(data: any): boolean {
        throw new Error("Method not implemented.");
    }
    displayFailureMessage(message: string): void {
        throw new Error("Method not implemented.");
    }

}