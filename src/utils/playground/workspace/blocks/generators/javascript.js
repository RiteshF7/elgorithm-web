import turnLed from "../../uicontroller/turnonled";
import {delay} from "../../uicontroller/uiutils";
import {moveForward} from "@/utils/playground/workspace/uicontroller/channelMessages";
import neoPixelController from '@/modules/playground/components/simulated-hardwares/components/neopixel-display/neoPixelBlockController'
import blockKeys from "@/utils/playground/workspace/blocks/blockKeys";
import ledController from "@/modules/playground/components/simulated-hardwares/components/led/ledController";
import servoMotorController from "@/modules/playground/components/simulated-hardwares/components/servo-motor/servoMotorController";
import {buzzerController} from "@/modules/playground/components/simulated-hardwares/components/buzzer/Buzzer";

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

forJsBlock[blockKeys.moveUp] = (blocks,generator)=> neoPixelController.moveUp()
forJsBlock[blockKeys.moveDown] = (blocks,generator)=> neoPixelController.moveDown()
forJsBlock[blockKeys.moveLeft] = (blocks,generator)=> neoPixelController.moveLeft()
forJsBlock[blockKeys.moveRight] = (blocks,generator)=> neoPixelController.moveRight()
forJsBlock[blockKeys.moveTopRight] = (blocks,generator)=> neoPixelController.moveTopRight()
forJsBlock[blockKeys.moveTopLeft] = (blocks,generator)=> neoPixelController.moveTopLeft()
forJsBlock[blockKeys.moveBottomLeft] = (blocks,generator)=> neoPixelController.moveBottomLeft()
forJsBlock[blockKeys.moveBottomRight] = (blocks,generator)=> neoPixelController.moveBottomRight()
forJsBlock[blockKeys.turnOnLed] = (blocks,generator)=> ledController.turnOn()
forJsBlock[blockKeys.turnOffLed] = (blocks,generator)=> ledController.turnOff()
forJsBlock[blockKeys.blinkLed] = (blocks,generator)=> ledController.blink()
forJsBlock[blockKeys.turnServoRight] = (blocks,generator)=> servoMotorController.turnRight()
forJsBlock[blockKeys.turnServoLeft] = (blocks,generator)=> servoMotorController.turnLeft()
forJsBlock[blockKeys.turnOnBuzzer] = (blocks,generator)=> buzzerController.turnBuzzerOn()
forJsBlock[blockKeys.turnOffBuzzer] = (blocks,generator)=> buzzerController.turnBuzzerOff()
