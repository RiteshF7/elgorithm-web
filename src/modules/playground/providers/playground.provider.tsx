import {createContext, FC, PropsWithChildren, useContext, useState} from "react";
import {Playground} from "@/utils/playground/playground";
import {ToolboxContainer} from "@/utils/playground/workspace/toolbox/toolboxContainer";
import {
    GlobalPGCommChannel,
    PlaygroundCommunicationChannel, RegisterPlaygroundComponent
} from "@/utils/pg-comm-channel.util";
import {any} from "prop-types";

interface PlaygroundContextProps {
    playground: Playground | null;
    initPlayground: (element: HTMLDivElement) => void;
    runCode: () => void;
    connect: () => void;
    registerComponent: RegisterPlaygroundComponent;
}



const PlaygroundContext = createContext<PlaygroundContextProps>({
    playground: null,
    initPlayground: () => null,
    runCode: () => null,
    connect: () => null,
    registerComponent: () => null,
});

export const PlaygroundProvider: FC<PropsWithChildren> = ({children}) => {

    const [playgroundInstance, setPlaygroundInstance] = useState<Playground | null>(null);
    const [componentState, setComponentState]  =useState({initialState:null,destinationState:null})
    const initPlayground = (element: HTMLDivElement) => {
        setPlaygroundInstance(new Playground(element, ToolboxContainer));
    }

    const runCode = () => {
        if (playgroundInstance) {
            playgroundInstance.generateExecJsCode();
        }
    }

    const connect = () => {
        console.log('Connect');
    }

    const registerComponent: RegisterPlaygroundComponent = (key, callback: (data: any) => void) => {
        // @ts-ignore
        (window[GlobalPGCommChannel] as PlaygroundCommunicationChannel).registerComponent(key, callback);
    }

    return (
        <PlaygroundContext.Provider value={{
            playground: playgroundInstance,
            initPlayground,
            runCode,
            connect,
            registerComponent
        }}>
            {children}
        </PlaygroundContext.Provider>
    )
}


export const usePlayground = () => {
    return useContext(PlaygroundContext);
}
