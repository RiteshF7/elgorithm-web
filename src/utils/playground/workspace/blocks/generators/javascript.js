import turnLed from "../../uicontroller/turnonled";
import {delay} from "../../uicontroller/uiutils";
import {moveForward} from "@/utils/playground/workspace/uicontroller/channelMessages";

export const forJsBlock = Object.create(null);

forJsBlock['change_led_state'] = function (block, generator) {
    const dropdown_led_state = block.getFieldValue('LED_STATE');
    generator.definitions_['led_function'] = turnLed.toString()
    return `turnLed(${dropdown_led_state})\n`
};


forJsBlock['delay_ms'] = function(block,generator) {
    const value_time = generator.valueToCode(block, 'time', generator.ORDER_ATOMIC);
    generator.definitions_['delay_function'] = delay.toString();
    return `delay(${value_time})\n`;
};


forJsBlock['move_forward'] = function(block, generator) {
    generator.definitions_['move_forward'] = moveForward.toString();
    return `\nmoveForward()\n`
};
