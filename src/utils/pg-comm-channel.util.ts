export const GlobalPGCommChannel = '_elg_pg_comm_channel';

export type RegisterPlaygroundComponent = (componentKey: string, callback: (data: any) => void) => void;
export type SendPlaygroundMessage = (componentKey: string, data?: any) => void;


export class PlaygroundCommunicationChannel {
    private registeredComponents: { [key: string]: (data: any) => void } = {};

    registerComponent(componentKey: string, callback: (data: any) => void) {
        if (this.registeredComponents[componentKey]) {
            console.log(`Component with key ${componentKey} already exists`);
        } else {
            this.registeredComponents[componentKey] = callback;
        }
    }

    sendMessage(componentKey: string, data?: any) {
        if (this.registeredComponents[componentKey]) {
            this.registeredComponents[componentKey](data);
        }
    }
}

export function globalSendPlaygroundMessage(componentKey: string, data?: any) {
    // @ts-ignore
    window[GlobalPGCommChannel]?.sendMessage(componentKey, data);
}


export function initPlaygroundCommunication() {
    // @ts-ignore
    window[GlobalPGCommChannel] = new PlaygroundCommunicationChannel();
}
