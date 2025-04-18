import BlockKeys from "@/utils/playground/workspace/blocks/blockKeys";

const HwPlaygroundConfig = {
    '1': {
        editorConfig: {
            toolboxType: 'flyoutToolbox',
            toolboxContent: [],
        },
    },
    '2': {
        editorConfig: {
            toolboxType: 'flyoutToolbox',
            toolboxContent: [BlockKeys.turnOnLed],
        },
    },
    '3': {
        editorConfig: {
            toolboxType: 'flyoutToolbox',
            toolboxContent: [BlockKeys.turnOffLed],
        },
    },
    '4': {
        editorConfig: {
            toolboxType: 'flyoutToolbox',
            toolboxContent: [BlockKeys.turnOffLed,BlockKeys.delay,BlockKeys.turnOffLed,BlockKeys.mathNumber],
        },
    },
    '5': {
        editorConfig: {
            toolboxType: 'flyoutToolbox',
            toolboxContent: [BlockKeys.turnOnLed],
        },
    },
}

export default HwPlaygroundConfig;