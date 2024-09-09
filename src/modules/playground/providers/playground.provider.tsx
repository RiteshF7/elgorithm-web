import {createContext, FC, PropsWithChildren, useContext, useState} from "react";
import {Playground} from "@/utils/playground/playground";
import {ToolboxContainer} from "@/utils/playground/workspace/toolbox/toolboxContainer";
import {
    GlobalPGCommChannel,
    PlaygroundCommunicationChannel, RegisterPlaygroundComponent
} from "@/utils/pg-comm-channel.util";
import {areDevicesConnected, connectSerial, listSerialDevices} from "@/utils/playground/webserial/webserial";
import boolean from "leva/src/components/Boolean";

interface PlaygroundContextProps {
    playground: Playground | null;
    initPlayground: (element: HTMLDivElement, toolbox: any) => void;
    runCode: () => void;
    getJsCode: () => string;
    connect: () => void;
    registerComponent: RegisterPlaygroundComponent;
    refreshDeviceStatus: () => void;
    isDeviceConnected: boolean;
}


const PlaygroundContext = createContext<PlaygroundContextProps>({
    playground: null,
    initPlayground: () => null,
    runCode: () => null,
    getJsCode: () => '',
    connect: () => null,
    registerComponent: () => null,
    refreshDeviceStatus: () => null,
    isDeviceConnected: false,
});

export const PlaygroundProvider: FC<PropsWithChildren> = ({children}) => {


    const [playgroundInstance, setPlaygroundInstance] = useState<Playground | null>(null);
    const initPlayground = (element: HTMLDivElement, toolbox: any) => {
        setPlaygroundInstance(new Playground(element, toolbox));
    }
    const [isDeviceConnected, setIsDeviceConnected] = useState(false)

    function getJsCode(): string {
        if (playgroundInstance) {
            return playgroundInstance.getJsCode();
        }
        return ''
    }

    const runCode = () => {
        if (playgroundInstance) {
            playgroundInstance.generateExecPyCode();
            // playgroundInstance.generateExecJsCode();
        }
    }

    const connect = async () => {
        if (playgroundInstance) {
            playgroundInstance.connectToDevice()
                .then(r => {
                    if (r!== undefined){
                      setIsDeviceConnected(true)
                    }else {
                        setIsDeviceConnected(false)
                    }

            })
                .catch(e => {
                    setIsDeviceConnected(false)
                    console.log(e)
                });
        }
    }

    const refreshDeviceStatus = () => {
        areDevicesConnected().then(r => {
            setIsDeviceConnected(r)
            if (r) runCode();
        })

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
            refreshDeviceStatus,
            isDeviceConnected
        }}>
            {children}
        </PlaygroundContext.Provider>
    )
}


export const usePlayground = () => {
    return useContext(PlaygroundContext);
}
