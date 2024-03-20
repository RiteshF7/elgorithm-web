import turnLed from "../../uicontroller/turnonled";
import {delay} from "../../uicontroller/uiutils";
import {moveForward} from "@/utils/playground/workspace/uicontroller/channelMessages";
import NeoPixelController from '@/modules/playground/components/simulated-hardwares/neopixel-display/neoPixelBlockController'
import blockKeys from "@/utils/playground/workspace/blocks/blockKeys";
import LedController from "@/modules/playground/components/simulated-hardwares/led/ledController";

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

forJsBlock[blockKeys.moveUp] = (blocks,generator)=> NeoPixelController.moveUp()
forJsBlock[blockKeys.moveDown] = (blocks,generator)=> NeoPixelController.moveDown()
forJsBlock[blockKeys.moveLeft] = (blocks,generator)=> NeoPixelController.moveLeft()
forJsBlock[blockKeys.moveRight] = (blocks,generator)=> NeoPixelController.moveRight()
forJsBlock[blockKeys.moveTopRight] = (blocks,generator)=> NeoPixelController.moveTopRight()
forJsBlock[blockKeys.moveTopLeft] = (blocks,generator)=> NeoPixelController.moveTopLeft()
forJsBlock[blockKeys.moveBottomLeft] = (blocks,generator)=> NeoPixelController.moveBottomLeft()
forJsBlock[blockKeys.moveBottomRight] = (blocks,generator)=> NeoPixelController.moveBottomRight()
forJsBlock[blockKeys.turnOnLed] = (blocks,generator)=> LedController.turnOn()
forJsBlock[blockKeys.turnOffLed] = (blocks,generator)=> LedController.turnOff()
forJsBlock[blockKeys.blinkLed] = (blocks,generator)=> LedController.blink()
