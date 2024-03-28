import {getChannelMessageWithDelay} from "@/utils/pg-comm-channel.util";
import {COMPONENT_KEY} from "@/modules/playground/components/simulated-hardwares/modules/light-buzzer/LightBuzzer";


const lightBuzzerController = {
    onStart: () => getChannelMessageWithDelay(COMPONENT_KEY, {state:'start'}, 200),
};


export default lightBuzzerController;



