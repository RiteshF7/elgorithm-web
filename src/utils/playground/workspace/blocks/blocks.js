import * as Blockly from 'blockly/core';
import neoPixelBlockDefinations from "@/utils/playground/workspace/blocks/definations/neoPixelBlockDefinations";
import blockKeys from "@/utils/playground/workspace/blocks/blockKeys";


const testBlock = {
    'type': 'test_block',
    'message0': 'example block',
    'colour': 160,
    'tooltip': '',
    'helpUrl': '',
};


export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(
    [testBlock, ...neoPixelBlockDefinations,]);

Blockly.Blocks['change_led_state'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Turn Led")
            .appendField(new Blockly.FieldDropdown([["On", "1"], ["Off", "0"]]), "LED_STATE");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#FF0000');
        this.setTooltip("You can change led state!");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['delay_ms'] = {
    init: function () {
        this.appendValueInput("time")
            .setCheck("Number")
            .appendField("delay Seconds");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#FF0000');
        this.setTooltip("Delay processing in milliseconds");
        this.setHelpUrl("http://www.bipes.net.br/");
    }
};

Blockly.Blocks['move_forward'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Move forward");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


