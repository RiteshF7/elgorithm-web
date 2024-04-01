import * as Blockly from 'blockly/core';
import neoPixelBlockDefinitions
    from "@/modules/playground/components/simulated-hardwares/components/neopixel-display/neoPixelBlockDefinitions";
import blockKeys from "@/utils/playground/workspace/blocks/blockKeys";
import ledBlockDefinitions
    from "@/modules/playground/components/simulated-hardwares/components/led/ledBlockDefinitions";
import servoMotorBlockDefinitions
    from "@/modules/playground/components/simulated-hardwares/components/servo-motor/servoMotorBlockDefinitions";
import buzzerBlockDefinitions
    from "@/modules/playground/components/simulated-hardwares/components/buzzer/buzzerBlockDefinitions";
import lightBuzzerBlockDefinitation
    from "@/modules/playground/components/simulated-hardwares/modules/light-buzzer/lightBuzzerBlockDefinitation";


const testBlock = {
    'type': 'test_block',
    'message0': 'example block',
    'colour': 160,
    'tooltip': '',
    'helpUrl': '',
};


export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(
    [testBlock, ...neoPixelBlockDefinitions, ...ledBlockDefinitions, ...servoMotorBlockDefinitions, ...buzzerBlockDefinitions, ...lightBuzzerBlockDefinitation]);

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


