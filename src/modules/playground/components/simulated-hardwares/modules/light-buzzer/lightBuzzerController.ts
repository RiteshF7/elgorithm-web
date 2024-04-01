import {getChannelMessageWithDelay} from "@/utils/pg-comm-channel.util";
import {COMPONENT_KEY} from "@/modules/playground/components/simulated-hardwares/modules/light-buzzer/LightBuzzer";

const initilizationDelay = 10000;

const lightBuzzerController = {
    onStart: () => getChannelMessageWithDelay(COMPONENT_KEY, {state:'onStart',delay:initilizationDelay,}, initilizationDelay),
};


export default lightBuzzerController;



