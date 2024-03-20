import blockKeys from "@/utils/playground/workspace/blocks/blockKeys";

const ledToolbox = [
    {
        'kind': 'block',
        'type': blockKeys.turnOnLed
    },
    {
        'kind': 'block',
        'type': blockKeys.turnOffLed
    },
    {
        'kind': 'block',
        'type': blockKeys.blinkLed
    },
]

export default ledToolbox