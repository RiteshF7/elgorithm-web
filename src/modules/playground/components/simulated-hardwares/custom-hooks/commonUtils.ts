import {usePlayground} from "@/modules/playground/providers/playground.provider";
import {resetMessageQueue} from "@/utils/pg-comm-channel.util";

export default class SHCUtils {

    private readonly desiredState: any;
    private readonly componentKey: string;
    private playgroundContext = usePlayground();

    constructor(componentKey: string, desiredState: any) {
        this.desiredState = desiredState;
        this.componentKey = componentKey;
    }

    registerComponent(handler: (data: any) => void) {
        this.playgroundContext.registerComponent(this.componentKey, handler)
    }


    private isCodeCompleted(data: any) {
        return data.hasOwnProperty('completed')
    }

    private isOnDesiredState(data: any) {
        return this.compareObjects(data, this.desiredState)
    }

    processResult(data: any, successHandler: () => void, failureHandler: () => void, payloadHandler: (data: any) => void) {
        if (this.isOnDesiredState(data)) {
            this.success(successHandler);
            return;
        }
        if (this.isCodeCompleted(data)) {
            if (this.isOnDesiredState(data)) {
                this.success(successHandler)
                return
            }
            this.failure(failureHandler);
            return;
        }
        payloadHandler(data);

    }

    private failure(failureHandler: () => void) {
        resetMessageQueue()
        this.showFailureMessage('failure');
        failureHandler();

    }

    private success(successHandler: () => void) {
        resetMessageQueue()
        this.showSuccessMessage('success');
        successHandler();
    }

    private showFailureMessage(message: String) {
        this.showMessage(message)
    }

    private showSuccessMessage(message: string) {
        this.showMessage(message)
    }

    private showMessage(message: String) {
        alert(message)
    }

    private compareObjects = <T extends Record<string, any>>(obj1: T, obj2: T): boolean => {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        // Check if number of keys are equal
        if (keys1.length !== keys2.length) {
            return false;
        }

        // Check if all keys and values are equal
        for (const key of keys1) {
            if (!(key in obj2) || obj1[key] !== obj2[key]) {
                return false;
            }
        }

        return true;
    };

}