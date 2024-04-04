import * as Blockly from 'blockly';
import {pythonGenerator} from 'blockly/python';
import {javascriptGenerator} from 'blockly/javascript';
import {forPyBlock} from './workspace/blocks/generators/python';
import {forJsBlock} from './workspace/blocks/generators/javascript';
import {save, load} from './workspace/serialization';
import {blocks} from "./workspace/blocks/blocks";
import theme from './workspace/elgotheme';
import {connectSerial, sendCodeToDevice} from "./webserial/webserial";
import {getCodeCompletionCallback, initPlaygroundCommunication} from "@/utils/pg-comm-channel.util";

initBlockly();

export class Playground {
    private workspace: Blockly.WorkspaceSvg;

    constructor(div: HTMLElement, toolbox: Element | any) {
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
        });
        load(this.workspace);
    }

    connectToDevice(): void {
        connectSerial().then(r => console.log(`device connected :: ${r}`)).catch(e => console.log(`device not connected :: ${e}`));
    }

    generateExecJsCode(playgroundConfig: any) {
        let code = javascriptGenerator.workspaceToCode(this.workspace);
        code += `\n ${getCodeCompletionCallback()}`
        // eval(code)
        this.executeJsCode(code)

    }

     executeJsCode(code:string,arg1 = 0, arg2 = 0, arg3 = 0, arg4 = 0, arg5 = 0): number {
        const something = new Function('arg1', 'arg2', 'arg3', 'arg4', 'arg5', code);
        return something(arg1, arg2, arg3, arg4, arg5);
    }

    generateExecPyCode(): void {
        const code = pythonGenerator.workspaceToCode(this.workspace);
        sendCodeToDevice(code);
    }
}

function initBlockly(): void {
    Blockly.common.defineBlocks(blocks);
    Object.assign(pythonGenerator.forBlock, forPyBlock);
    Object.assign(javascriptGenerator.forBlock, forJsBlock);
}
