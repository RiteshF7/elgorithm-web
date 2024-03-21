import {getChannelMessageWithDelay} from "@/utils/pg-comm-channel.util";
import {
    COMPONENT_KEY,
    ServoDirections
} from "@/modules/playground/components/simulated-hardwares/components/servo-motor/ServoMotor";

const servoMotorController = {
    turnRight:()=>getChannelMessageWithDelay(COMPONENT_KEY,{direction:ServoDirections.RIGHT},200),
    turnLeft:()=>getChannelMessageWithDelay(COMPONENT_KEY,{direction:ServoDirections.LEFT},200),
}

export default servoMotorController;