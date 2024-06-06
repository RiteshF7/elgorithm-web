import blockKeys from "@/utils/playground/workspace/blocks/blockKeys";
import {Modules} from "@/modules/playground/components/simulated-hardwares/utils/modulesMap";
import {
    ControllerType,
    MatrixType
} from "@/modules/playground/components/simulated-hardwares/modules/neopixel-display/types";

export const neoPixelDisplaySchema =     {
    chapterId: 0,
    type: 'content',
    content: {
        contentId: 0,
        title: "Move pixel 1 step right",
        description: "Move pixel 1 step right",
        media: [
            {
                type: "video",
                url: "",
                caption: ""
            }
        ]
    },
    editorConfig: {
        toolboxType: 'flyoutToolbox',
        toolboxContent: [blockKeys.moveRight],
    },
    runnerConfig: {
        moduleName: Modules.NeoPixelModule,
        moduleConfig: {
            matrixSize: 11,
            matrixType: MatrixType.UNI_DIRECTIONAL,
            testCase: {
                initialState: [[5, 5]],
                expectedOutput: [[5, 6]],
            },
            controllerType: ControllerType.blocks
        }
    }
}

export const ledSchema =     {
    chapterId: 11,
    type: 'content',
    content: {
        contentId: 0,
        title: "turn led on",
        description: "turn led on",
        media: [
            {
                type: "video",
                url: "",
                caption: ""
            }
        ]
    },
    editorConfig: {
        toolboxType: 'flyoutToolbox',
        toolboxContent: [blockKeys.turnOnLed],
    },
    runnerConfig: {
        moduleNames: [Modules.LedModule],
        moduleConfig: {
            testCases: [
                {
                    inputs: {},
                    initialState: {[Modules.LedModule]: {active: false, color: 'red'}},
                    expectedOutput: [{[Modules.LedModule]: {active: true, color: 'red'}}]
                },
            ]

        }
    }
};

