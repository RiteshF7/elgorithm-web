import turnLed from "../../uicontroller/turnonled";
import {delay} from "../../uicontroller/uiutils";
import {initializeLightBuzzer, moveForward} from "@/utils/playground/workspace/uicontroller/channelMessages";
import neoPixelController from '@/module/playground/components/simulated-hardwares/components/neopixel-display/neoPixelBlockController'
import blockKeys from "@/utils/playground/workspace/blocks/blockKeys";
import ledController from "@/module/playground/components/simulated-hardwares/components/led/ledController";
import servoMotorController from "@/module/playground/components/simulated-hardwares/components/servo-motor/servoMotorController";
import {buzzerController} from "@/module/playground/components/simulated-hardwares/components/buzzer/Buzzer";
import lightBuzzerController
    from "@/module/playground/components/simulated-hardwares/module/light-buzzer/lightBuzzerController";
import {blockConfigs} from "@/utils/playground/workspace/blocks/blocks";

// export const forJsBlock = Object.create(null);
//

// forJsBlock[blockKeys.moveUp] = (blocks,generator)=> neoPixelController.moveUp()
// forJsBlock[blockKeys.moveDown] = (blocks,generator)=> neoPixelController.moveDown()
// forJsBlock[blockKeys.moveLeft] = (blocks,generator)=> neoPixelController.moveLeft()
// forJsBlock[blockKeys.moveRight] = (blocks,generator)=> neoPixelController.moveRight()
// forJsBlock[blockKeys.moveTopRight] = (blocks,generator)=> neoPixelController.moveTopRight()
// forJsBlock[blockKeys.moveTopLeft] = (blocks,generator)=> neoPixelController.moveTopLeft()
// forJsBlock[blockKeys.moveBottomLeft] = (blocks,generator)=> neoPixelController.moveBottomLeft()
// forJsBlock[blockKeys.moveBottomRight] = (blocks,generator)=> neoPixelController.moveBottomRight()
// forJsBlock[blockKeys.turnOnLed] = (blocks,generator)=> ledController.turnOn()
// forJsBlock[blockKeys.turnOffLed] = (blocks,generator)=> ledController.turnOff()
// forJsBlock[blockKeys.blinkLed] = (blocks,generator)=> ledController.blink()
// forJsBlock[blockKeys.turnServoRight] = (blocks,generator)=> servoMotorController.turnRight()
// forJsBlock[blockKeys.turnServoLeft] = (blocks,generator)=> servoMotorController.turnLeft()
// forJsBlock[blockKeys.turnOnBuzzer] = (blocks,generator)=> buzzerController.turnBuzzerOn()
// forJsBlock[blockKeys.turnOffBuzzer] = (blocks,generator)=> buzzerController.turnBuzzerOff()
// // forJsBlock[blockKeys.lightBuzzerOnStart] = (blocks,generator)=> lightBuzzerController.onStart()
