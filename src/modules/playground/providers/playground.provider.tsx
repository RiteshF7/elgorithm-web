import {createContext, FC, PropsWithChildren, useContext, useState} from "react";
import {Playground} from "@/utils/playground/playground";
import {Toolboxes} from "@/utils/playground/workspace/toolbox/toolboxes";
import {
    GlobalPGCommChannel,
    PlaygroundCommunicationChannel, RegisterPlaygroundComponent
} from "@/utils/pg-comm-channel.util";

interface PlaygroundContextProps {
    playground: Playground | null;
    initPlayground: (element: HTMLDivElement) => void;
    runCode: () => void;
    connect: () => void;
    jsCodeString: string;
    registerComponent: RegisterPlaygroundComponent;
}

const PlaygroundContext = createContext<PlaygroundContextProps>({
    playground: null,
    initPlayground: () => null,
    runCode: () => null,
    connect: () => null,
    jsCodeString: '',
    registerComponent: () => null
});

export const PlaygroundProvider: FC<PropsWithChildren> = ({children}) => {

    const [playgroundInstance, setPlaygroundInstance] = useState<Playground | null>(null);
    const [jsCodeString, setJsCodeString] = useState<string>('');

    const initPlayground = (element: HTMLDivElement) => {
        setPlaygroundInstance(new Playground(element, Toolboxes.turnOnLed));
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
            jsCodeString,
            registerComponent
        }}>
            {children}
        </PlaygroundContext.Provider>
    )
}


export const usePlayground = () => {
    return useContext(PlaygroundContext);
}
