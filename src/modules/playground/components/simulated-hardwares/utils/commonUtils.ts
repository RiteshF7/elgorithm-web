import {usePlayground} from "@/modules/playground/providers/playground.provider";
import {resetMessageQueue} from "@/utils/pg-comm-channel.util";


export default class SHCUtils {

    private readonly desiredState: any;
    private currentState: any;
    private readonly componentKey: string;
    private playgroundContext = usePlayground();
    successHandler: () => void;
    failureHandler: () => void;

    constructor(componentKey: string, initialState: any, desiredState: any, successHandler: () => void, failureHandler: () => void) {
        this.desiredState = desiredState;
        this.componentKey = componentKey;
        this.currentState = initialState;
        this.successHandler = successHandler;
        this.failureHandler = failureHandler;

    }

    initComponent(payloadHandler: (data: any) => void) {
        this.registerComponent((data) => {
            if (this.isCodeCompleted(data)) {
               this.processResult()
            } else {
                payloadHandler(data);
            }

        })
    }

    private processResult(){
        if (this.isOnDesiredState()) {
            this.success(this.successHandler);
            return true
        }
        this.failure('not as expected!', this.failureHandler)
        return false;
    }


    updateState(updatedState: any){
        this.currentState = updatedState;
    }


    private registerComponent(handler: (data: any) => void) {
        this.playgroundContext.registerComponent(this.componentKey, handler)
    }


    private isCodeCompleted(data: any) {
        return data.hasOwnProperty('completed')
    }

    isOnDesiredState() {
        return this.compareObjects(this.currentState, this.desiredState)
    }


    failure(message: string, failureHandler: () => void) {
        resetMessageQueue()
        failureHandler();
        this.showFailureMessage(message);

    }

    success(successHandler: () => void) {
        resetMessageQueue()
        successHandler();
        this.showSuccessMessage('success!');
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