import {createContext, FC, PropsWithChildren, useContext, useState} from "react";
import {Playground} from "@/utils/playground/playground";
import {Toolboxes} from "@/utils/playground/workspace/toolbox/toolboxes";

interface PlaygroundContextProps {
    playground: Playground | null;
    initPlayground: (element: HTMLDivElement) => void;
    runCode: () => void;
    connect: () => void;
    jsCodeString: string;
}

const PlaygroundContext = createContext<PlaygroundContextProps>({
    playground: null,
    initPlayground: () => null,
    runCode: () => null,
    connect: () => null,
    jsCodeString: ''
});

export const PlaygroundProvider: FC<PropsWithChildren> = ({children}) => {

    const [playgroundInstance, setPlaygroundInstance] = useState<Playground | null>(null);
    const [jsCodeString, setJsCodeString] = useState<string>('');

    const initPlayground = (element: HTMLDivElement) => {
        setPlaygroundInstance(new Playground(element, Toolboxes.turnOnLed));
    }

    const runCode = () => {
        if (playgroundInstance) {
            setJsCodeString(playgroundInstance.getJSCode());
        }
    }

    const connect = () => {
        console.log('Connect');
    }

    return (
        <PlaygroundContext.Provider value={{
            playground: playgroundInstance,
            initPlayground,
            runCode,
            connect,
            jsCodeString
        }}>
            {children}
        </PlaygroundContext.Provider>
    )
}


export const usePlayground = () => {
    return useContext(PlaygroundContext);
}
