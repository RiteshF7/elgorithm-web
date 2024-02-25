import * as Blockly from 'blockly/core';


const testBlock = {
    'type': 'test_block',
    'message0': 'example block',
    'colour': 160,
    'tooltip': '',
    'helpUrl': '',
};



 export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(
    [testBlock]);

Blockly.Blocks['change_led_state'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Turn Led")
            .appendField(new Blockly.FieldDropdown([["On","1"], ["Off","0"]]), "LED_STATE");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#FF0000');
        this.setTooltip("You can change led state!");
        this.setHelpUrl("");
    }
};

