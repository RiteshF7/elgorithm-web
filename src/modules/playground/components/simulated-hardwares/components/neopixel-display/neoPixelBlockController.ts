import {COMPONENT_KEY} from "@/modules/playground/components/simulated-hardwares/components/neopixel-display/NeoPixelMatrix";
import {getChannelMessageWithDelay} from "@/utils/pg-comm-channel.util";
import {Direction} from "@/modules/playground/components/simulated-hardwares/components/neopixel-display/types";

const neoPixelController = {
    moveUp: () => getBlockCode( Direction.Up ),
    moveDown: () => getBlockCode(Direction.Down ),
    moveLeft: () => getBlockCode( Direction.Left ),
    moveRight: () => getBlockCode(Direction.Right ),
    moveTopLeft: () => getBlockCode(Direction.TopLeft ),
    moveTopRight: () => getBlockCode(Direction.TopRight ),
    moveBottomLeft: () => getBlockCode(Direction.BottomLeft ),
    moveBottomRight: () => getBlockCode(Direction.BottomRight ),
    stop: () => getBlockCode(Direction.Stop ),
};

function getBlockCode(payload: Direction) {
    return `await delay(200);\nmove('${payload}');\n`
}

export default neoPixelController;



