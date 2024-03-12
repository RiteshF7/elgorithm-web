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
    constructor(div, toolbox, playgroundConfig) {
        initPlaygroundCommunication();
        this.config = playgroundConfig
        this.workspace = Blockly.inject(div, {
            toolbox: toolbox, theme: theme,
            toolboxPosition: 'end',
            horizontalLayout: true,
            scrollbars: true,
            css: true,
            rtl: false,
            zoom: {
                controls: false, wheel: true,
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
        const code = javascriptGenerator.workspaceToCode(this.workspace);
        console.log('code', code);
        eval(code)
        this.checkCode(code);

    }

    checkCode(code) {
        this.config.code.comparison.forEach((solution) => {
            if (code === solution.code) {
                window['_elg_pg_comm_channel'].sendMessage('CUBE', {
                    completed: solution.isCorrect, message: solution.message
                });
            }
        })
        window['_elg_pg_comm_channel'].sendMessage('CUBE', {
            completed: false, message: 'Code not correct'
        });

        //check if code exist in potential solutions or incorrect code
        //if code exist in potential solutions, send message to backend
        //if code exist in incorrect code, send message to backend
        //show appropriate message on UI
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
