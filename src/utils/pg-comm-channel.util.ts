export const GlobalPGCommChannel = '_elg_pg_comm_channel';

export type RegisterPlaygroundComponent = (componentKey: string, callback: (data: any) => void) => void;
export type SendPlaygroundMessage = (componentKey: string, data?: any) => void;

// [led off, delay 3000, led on]

export class PlaygroundCommunicationChannel {
    private registeredComponents: { [key: string]: (data: any) => void } = {};

    private messageQueue: { componentKey: string, data?: any }[] = [];

    private queuePaused = false;

    registerComponent(componentKey: string, callback: (data: any) => void) {
        if (this.registeredComponents[componentKey]) {
            console.log(`Component with key ${componentKey} already exists`);
        } else {
            this.registeredComponents[componentKey] = callback;
        }
    }

    private dequeueMessages() {
        if (!this.queuePaused) {
            const lastMessage = this.messageQueue.pop();
            if (lastMessage?.componentKey === 'delay') {
                setTimeout(() => {
                    this.queuePaused = false;
                    this.dequeueMessages();
                }, lastMessage.data.time || 1000);
                this.queuePaused = true;
            } else if (lastMessage && this.registeredComponents[lastMessage.componentKey]) {
                this.registeredComponents[lastMessage.componentKey](lastMessage.data);
                this.dequeueMessages();
            }
        }
    }

    private enqueueMessage(componentKey: string, data?: any) {
        this.messageQueue.unshift({componentKey, data});
    }

    sendMessage(componentKey: string, data?: any) {
        this.enqueueMessage(componentKey, data);
        this.dequeueMessages();
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
