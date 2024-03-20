import {getChannelMessageWithDelay} from "@/utils/pg-comm-channel.util";
import {COMPONENT_KEY} from "@/modules/playground/components/simulated-hardwares/led/Led";
import turnLed from "@/utils/playground/workspace/uicontroller/turnonled";


const LedController = {
    turnOn: () => getChannelMessageWithDelay(COMPONENT_KEY, {active: true,color:'green'}, 200),
    turnOff: () => getChannelMessageWithDelay(COMPONENT_KEY, {active: false ,color:'green'}, 200),
    blink: () => {
        return getChannelMessageWithDelay(COMPONENT_KEY, {active: true ,color:'green'}, 200)+
            getChannelMessageWithDelay(COMPONENT_KEY, {active: false ,color:'green'}, 200)
    },
};


export default LedController;



