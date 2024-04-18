import {getChannelMessageWithDelay} from "@/utils/pg-comm-channel.util";
import {
    COMPONENT_KEY,
} from "@/modules/playground/components/simulated-hardwares/components/servo-motor/ServoMotor";

const servoMotorController = {
    turnRight:()=>getChannelMessageWithDelay(COMPONENT_KEY,{direction:''},200),
    turnLeft:()=>getChannelMessageWithDelay(COMPONENT_KEY,{direction:''},200),
}

export default servoMotorController;