import {
    GlobalPGCommChannel,
    PlaygroundCommunicationChannel,
    RegisterPlaygroundComponent,
    resetMessageQueue
} from "@/utils/pg-comm-channel.util";
import {createContext, FC, PropsWithChildren, useContext} from "react";
import {any} from "prop-types";


interface SHContextProps {
    registerComponent: RegisterPlaygroundComponent;
    initCode: (data: any) => boolean;
    currentState: any;
    updateCurrentState: (currentState: string) => void;
    checkCompletionStatus: (data: any, successCallback: () => void, failureCallback: () => void) => boolean;
    stopCode: () => void

}

interface ComponentConfigProp {
    initialState: any;
    desiredState: any;
}

const ShContext = createContext<SHContextProps>({
    registerComponent: () => null,
    currentState: null,
    updateCurrentState: () => null,
    checkCompletionStatus: () => false,
    stopCode: () => null,
    initCode: () => true
});

export const SHProvider: FC<PropsWithChildren<ComponentConfigProp>> = ({initialState, desiredState, children}) => {

    let currentState =  {...initialState};

    function checkCompletionStatus(data: any, successCallback: () => void, failureCallback: () => void): boolean {

        if (isCodeCompleted(data)) {
            if (isOnDesiredState(currentState, desiredState)) {
                stopCode()
                successCallback()
                return true
            }
            stopCode()
            failureCallback()
            return true;
        }
        return false;
    }

    function updateCurrentState(updatedCurrentState: any) {
        currentState = updatedCurrentState;
    }

    function initCode(data:any):boolean{
        return data.hasOwnProperty('init')

    }



    function isOnDesiredState(currentState: any, desiredState: any): boolean {
        return compareObjects(currentState, desiredState);
    }

    function isCodeCompleted(data: any): boolean {
        return data.hasOwnProperty('completed')
    }

    function stopCode() {
        resetMessageQueue()
    }

    function compareObjects<T extends Record<string, any>>(obj1: T, obj2: T): boolean {
        if (typeof obj1 === 'object' && typeof obj2 === 'object') {
            // Get keys of both objects
            const keys1 = Object.keys(obj1);
            const keys2 = Object.keys(obj2);

            // Check if number of keys are same
            if (keys1.length !== keys2.length) {
                return false;
            }

            // Iterate over keys
            for (let key of keys1) {
                // Recursively compare nested objects or arrays
                if (!compareObjects(obj1[key], obj2[key])) {
                    return false;
                }
            }

            // If all key-value pairs are identical
            return true;
        } else {
            // If not objects, perform simple value comparison
            return obj1 === obj2;
        }

    }


    const registerComponent: RegisterPlaygroundComponent = (key, callback: (data: any) => void) => {
        // @ts-ignore
        (window[GlobalPGCommChannel] as PlaygroundCommunicationChannel).registerComponent(key, callback);
    }


    return (
        <ShContext.Provider
            value={{registerComponent, currentState, updateCurrentState, checkCompletionStatus, stopCode, initCode}}>
            {children}
        </ShContext.Provider>
    )
}

export const useShContext = () => {
    return useContext(ShContext);
}
