import {
    GlobalPGCommChannel,
    PlaygroundCommunicationChannel,
    RegisterPlaygroundComponent,
    resetMessageQueue
} from "@/utils/pg-comm-channel.util";
import {createContext, FC, PropsWithChildren, useContext} from "react";
import _ from 'lodash';



interface SHContextProps {
    registerComponent: RegisterPlaygroundComponent;
    initCode: (data: any) => boolean;
    initialUiState:any,
    updateUiState: (componentKey:string,updatedUiState: any) => void;
    checkCompletionStatus: (data: any, successCallback: () => void, failureCallback: () => void) => boolean;
    stopCode: () => void

}

interface ComponentConfigProp {
    initialUiState: any;
    desiredUiState: any;
}

const ShContext = createContext<SHContextProps>({
    registerComponent: () => null,
    initialUiState:null,
    updateUiState: () => null,
    checkCompletionStatus: () => false,
    stopCode: () => null,
    initCode: () => true
});

export const SHProvider: FC<PropsWithChildren<ComponentConfigProp>> = ({initialUiState, desiredUiState, children}) => {

    let uiState = {...initialUiState};
    const codeProgress:any = []


    function checkCompletionStatus(data: any, successCallback: () => void, failureCallback: () => void): boolean {

        if (isCodeCompleted(data)) {
            if (isOnDesiredState()) {
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

    function updateUiState(componentKey:string,updatedUiState: any) {
        console.log(updatedUiState)
        // const newState = {
        //     ...initialUiState,
        //     LED: {
        //         ...initialUiState.LED,
        //         active: true, // Update active value
        //         color: 'blue' // Update color value
        //     }
        // };
        uiState = {...initialUiState, ...{[componentKey]: { ...initialUiState[componentKey],...updatedUiState}}};
        console.log('update triggered!',uiState)
        console.log(codeProgress)
        codeProgress.push(uiState)
        console.log(codeProgress)
    }

    function initCode(data: any): boolean {
        return data.hasOwnProperty('init')

    }


    function isOnDesiredState(): boolean {
         return  _.isEqual(desiredUiState, codeProgress);

    }

    function isCodeCompleted(data: any): boolean {
        return data.hasOwnProperty('completed')
    }

    function stopCode() {
        resetMessageQueue()
    }



    const registerComponent: RegisterPlaygroundComponent = (key, callback: (data: any) => void) => {
        // @ts-ignore
        (window[GlobalPGCommChannel] as PlaygroundCommunicationChannel).registerComponent(key, callback);
    }


    return (
        <ShContext.Provider
            value={{registerComponent,initialUiState, updateUiState, checkCompletionStatus, stopCode, initCode}}>
            {children}
        </ShContext.Provider>
    )
}

export const useShContext = () => {
    return useContext(ShContext);
}
