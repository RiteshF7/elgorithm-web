import * as Blockly from 'blockly';
import {pythonGenerator} from 'blockly/python';
import {javascriptGenerator} from 'blockly/javascript';
import {forPyBlock} from './workspace/blocks/generators/python';
import {forJsBlock} from './workspace/blocks/generators/javascript';
import {save, load} from './workspace/serialization'
import {blocks} from "./workspace/blocks/blocks";
import theme from './workspace/elgotheme'
import {connectSerial, sendCodeToDevice} from "./webserial/webserial";
import {initPlaygroundCommunication} from "@/utils/pg-comm-channel.util";


initBlockly()

export class Playground {
    constructor(div, toolbox) {
        initPlaygroundCommunication();
        this.workspace = Blockly.inject(div, {toolbox: toolbox, theme: theme})
        load(this.workspace);
    }

    connectToDevice() {
        connectSerial().then(r => console.log(`device connected :: ${r}`)).catch(e => console.log(`device not connected :: ${e}`))
    }

    getJSCode() {
        return javascriptGenerator.workspaceToCode(this.workspace);
    }

    generateExecJsCode() {
        const code = javascriptGenerator.workspaceToCode(this.workspace);
        console.log('code', code);
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
