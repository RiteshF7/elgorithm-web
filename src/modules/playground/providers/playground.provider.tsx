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
    initPlayground: (element: HTMLDivElement,toolbox: any) => void;
    runCode: () => void;
    getJsCode: () => string;
    connect: () => void;
    registerComponent: RegisterPlaygroundComponent;
    moveToNextLevel:(levelId:string)=>void;
}


const PlaygroundContext = createContext<PlaygroundContextProps>({
    playground: null,
    initPlayground: () => null,
    runCode: () => null,
    getJsCode: () => '',
    connect: () => null,
    registerComponent: () => null,
    moveToNextLevel:()=>null
});

export const PlaygroundProvider: FC<PropsWithChildren> = ({children}) => {



    const [playgroundInstance, setPlaygroundInstance] = useState<Playground | null>(null);
    const initPlayground = (element: HTMLDivElement,toolbox:any) => {
        setPlaygroundInstance(new Playground(element, toolbox));
    }

    function getJsCode():string{
        if (playgroundInstance) {
            return playgroundInstance.getJsCode();
        }
        return ''
    }

    const runCode = () => {
        if (playgroundInstance) {
            playgroundInstance.generateExecJsCode();
        }
    }

    const connect = () => {
        console.log('Connect');
    }
    const moveToNextLevel = () => {
        console.log('Next level enabled!');
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
            getJsCode,
            connect,
            registerComponent,
            moveToNextLevel
        }}>
            {children}
        </PlaygroundContext.Provider>
    )
}


export const usePlayground = () => {
    return useContext(PlaygroundContext);
}
