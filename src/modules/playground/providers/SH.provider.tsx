import {
    GlobalPGCommChannel,
    PlaygroundCommunicationChannel,
    RegisterPlaygroundComponent, resetMessageQueue
} from "@/utils/pg-comm-channel.util";
import {createContext, FC, PropsWithChildren, useContext, useState} from "react";



interface SHContextProps {
    registerComponent: RegisterPlaygroundComponent;
    currentState:any;
    updateCurrentState: (currentState: string) => void;
    checkCompletionStatus: (data: any, successCallback: () => void, failureCallback: () => void) => boolean;

}

interface ComponentConfigProp {
    initialState: any;
    desiredState: any;
}

const ShContext = createContext<SHContextProps>({
    registerComponent: () => null,
    currentState:null,
    updateCurrentState: () => null,
    checkCompletionStatus: () => false,
});

export const SHProvider: FC<PropsWithChildren<ComponentConfigProp>> = ({initialState, desiredState, children}) => {

    let currentState = initialState;

    function checkCompletionStatus(data: any, successCallback: () => void, failureCallback: () => void): boolean {
        if (isCodeCompleted(data)) {
            if (isOnDesiredState(currentState, desiredState)) {
                resetMessageQueue()
                successCallback()
                return true
            }
            resetMessageQueue()
            failureCallback()
            return true;
        }
        return false;
    }

    function updateCurrentState(updatedCurrentState: any) {
        currentState = updatedCurrentState;
    }

    function isOnDesiredState(currentState: any, desiredState: any): boolean {
        return compareObjects(currentState, desiredState);
    }

    function isCodeCompleted(data: any): boolean {
        return data.hasOwnProperty('completed')
    }

    function compareObjects<T extends Record<string, any>>(obj1: T, obj2: T): boolean {
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
    }


    const registerComponent: RegisterPlaygroundComponent = (key, callback: (data: any) => void) => {
        // @ts-ignore
        (window[GlobalPGCommChannel] as PlaygroundCommunicationChannel).registerComponent(key, callback);
    }


    return (
        <ShContext.Provider value={{registerComponent,currentState, updateCurrentState, checkCompletionStatus}}>
            {children}
        </ShContext.Provider>
    )
}

export const useShContext = () => {
    return useContext(ShContext);
}
