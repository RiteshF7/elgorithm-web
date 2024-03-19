import {COMPONENT_KEY} from "@/modules/playground/components/simulated-hardwares/neopixel-display/NeoPixelMatrix";
import {getChannelMessage,getChannelMessageWithDelay} from "@/utils/pg-comm-channel.util";
import {Direction} from "@/modules/playground/components/simulated-hardwares/neopixel-display/types";

const NEO_PIXEL_COMPONENT_KEY = COMPONENT_KEY ;

const NeoPixelController = {
    moveUp: () => getChannelMessageWithDelay(NEO_PIXEL_COMPONENT_KEY, { Direction: Direction.Up }),
    moveDown: () => getChannelMessageWithDelay(NEO_PIXEL_COMPONENT_KEY, { Direction: Direction.Down }),
    moveLeft: () => getChannelMessageWithDelay(NEO_PIXEL_COMPONENT_KEY, { Direction: Direction.Left }),
    moveRight: () => getChannelMessageWithDelay(NEO_PIXEL_COMPONENT_KEY, { Direction: Direction.Right }),
    moveTopLeft: () => getChannelMessageWithDelay(NEO_PIXEL_COMPONENT_KEY, { Direction: Direction.TopLeft }),
    moveTopRight: () => getChannelMessageWithDelay(NEO_PIXEL_COMPONENT_KEY, { Direction: Direction.TopRight }),
    moveBottomLeft: () => getChannelMessageWithDelay(NEO_PIXEL_COMPONENT_KEY, { Direction: Direction.BottomLeft }),
    moveBottomRight: () => getChannelMessageWithDelay(NEO_PIXEL_COMPONENT_KEY, { Direction: Direction.BottomRight }),
    stop: () => getChannelMessage(NEO_PIXEL_COMPONENT_KEY, { Direction: Direction.Stop })
};

export default NeoPixelController;
