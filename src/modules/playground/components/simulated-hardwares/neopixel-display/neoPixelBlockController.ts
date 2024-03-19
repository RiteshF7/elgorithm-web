import {COMPONENT_KEY} from "@/modules/playground/components/simulated-hardwares/neopixel-display/NeoPixelMatrix";
import {getChannelMessageWithDelay} from "@/utils/pg-comm-channel.util";
import {Direction} from "@/modules/playground/components/simulated-hardwares/neopixel-display/types";


const NeoPixelController = {
    moveUp: () => getDirectionMessage( Direction.Up ),
    moveDown: () => getDirectionMessage(Direction.Down ),
    moveLeft: () => getDirectionMessage( Direction.Left ),
    moveRight: () => getDirectionMessage(Direction.Right ),
    moveTopLeft: () => getDirectionMessage(Direction.TopLeft ),
    moveTopRight: () => getDirectionMessage(Direction.TopRight ),
    moveBottomLeft: () => getDirectionMessage(Direction.BottomLeft ),
    moveBottomRight: () => getDirectionMessage(Direction.BottomRight ),
    stop: () => getDirectionMessage(Direction.Stop ),
};

function getDirectionMessage(payload: Direction) {
    return getChannelMessageWithDelay(COMPONENT_KEY, { Direction: payload });
}

export default NeoPixelController;



