import * as Blockly from 'blockly';
import {pythonGenerator} from 'blockly/python';
import {javascriptGenerator} from 'blockly/javascript';
import {forPyBlock} from './workspace/blocks/generators/python';
import {forJsBlock} from './workspace/blocks/generators/javascript';
import {save, load} from './workspace/serialization'
import {blocks} from "./workspace/blocks/blocks";
import theme from './workspace/elgotheme'
import {connectSerial, sendCodeToDevice} from "./webserial/webserial";
import {
    getCodeCompletionCallback,
    GlobalPGCommChannel,
    initPlaygroundCommunication,
    PlaygroundCommunicationChannel
} from "@/utils/pg-comm-channel.util";
import number from "leva/src/components/Number";
import {int} from "three/nodes";


initBlockly()

export class Playground {
    constructor(div, toolbox) {
        initPlaygroundCommunication();
        this.workspace = Blockly.inject(div, {
            toolbox: toolbox, theme: theme,
            toolboxPosition: 'start',
            horizontalLayout: false,
            scrollbars: true,
            css: true,
            rtl: false,
            zoom: {
                controls: false,
                wheel: true,
                startScale: .8,
                maxScale: 3,
                minScale: 0.3,
                scaleSpeed: 1.2
            },
            trashcan: false,

        })
        load(this.workspace);
    }

    connectToDevice() {
        connectSerial().then(r => console.log(`device connected :: ${r}`)).catch(e => console.log(`device not connected :: ${e}`))
    }

    getJSCode() {
        return javascriptGenerator.workspaceToCode(this.workspace);
    }

    generateExecJsCode() {
        let code = javascriptGenerator.workspaceToCode(this.workspace);
        console.log('code', code);
        code += `\n ${getCodeCompletionCallback()}`
        eval(code)
    }

    generateExecPyCode() {
        const code = pythonGenerator.workspaceToCode(this.workspace);
        sendCodeToDevice(code)
    }


}


function initBlockly() {
    Blockly.common.defineBlocks(blocks);
    Object.assign(pythonGenerator.forBlock, forPyBlock);
    Object.assign(javascriptGenerator.forBlock, forJsBlock);
}
