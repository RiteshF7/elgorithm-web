import {getChannelMessageWithDelay} from "@/utils/pg-comm-channel.util";
import {COMPONENT_KEY} from "@/modules/playground/components/simulated-hardwares/components/led/Led";


const ledController = {
    turnOn: () => getChannelMessageWithDelay(COMPONENT_KEY, {active: true,color:'green'}, 200),
    turnOff: () => getChannelMessageWithDelay(COMPONENT_KEY, {active: false ,color:'green'}, 200),
    blink: () => {
        return getChannelMessageWithDelay(COMPONENT_KEY, {active: true ,color:'green'}, 200)+
            getChannelMessageWithDelay(COMPONENT_KEY, {active: false ,color:'green'}, 200)
    },
};


export default ledController;



