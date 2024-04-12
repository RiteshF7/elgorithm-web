import BlockKeys from "@/utils/playground/workspace/blocks/blockKeys";
import {
    ControllerType,
    MatrixType,
    TestCase
} from "@/modules/playground/components/simulated-hardwares/components/neopixel-display/types";
import {
    NeoPixelDirect
} from "@/modules/playground/components/simulated-hardwares/components/neopixel-display/NeoPixelDirect";
import {Modules} from "@/modules/playground/components/simulated-hardwares/modulesMap";
import NeopixelBlockConfig
    from "@/modules/playground/components/simulated-hardwares/components/neopixel-display/neopixelBlockConfig";
import {loopsToolbox} from "@/utils/playground/workspace/toolbox/core/loopsToolbox";

export const PlaygroundContainerContent = [
    {
        chapterId:0,
        type:'content',
        content: {
            contentId: 0,
            title: "turn pixel right",
            description: "turn pixel right",
            media: [
                {
                    type: "video",
                    url: "",
                    caption: ""
                }
            ]
        },
        editorConfig:{
            toolboxType:'flyoutToolbox',
            toolboxContent: [...NeopixelBlockConfig.toolBox,...loopsToolbox],
        },
        runnerConfig: {
            moduleName:Modules.NeoPixelModule,
            moduleConfig:{
                matrixSize: 11,
                matrixType: MatrixType.UNI_DIRECTIONAL,
                testCase: {
                    input: [[5, 5]],
                    expectedOutput: [[5, 6]],
                },
                controllerType: ControllerType.blocks
            }
        }
    },
    {
        chapterId:0,
        type:'content',
        content: {
            contentId: 0,
            title: "move pixel right 3 times",
            description: "turn pixel right 3 times",
            media: [
                {
                    type: "video",
                    url: "",
                    caption: ""
                }
            ]
        },
        editorConfig:{
            toolboxType:'flyoutToolbox',
            toolboxContent: [...NeopixelBlockConfig.toolBox,...loopsToolbox],
        },
        runnerConfig: {
            moduleName:Modules.NeoPixelModule,
            moduleConfig:{
                matrixSize: 11,
                matrixType: MatrixType.UNI_DIRECTIONAL,
                testCase: {
                    input: [[5, 5]],
                    expectedOutput: [[5, 6], [5, 7], [5, 8]]
                },
                controllerType: ControllerType.blocks
            }
        }
    },
    {
        chapterId:0,
        type:'content',
        content: {
            contentId: 0,
            title: "join two pixels",
            description: "join two right",
            media: [
                {
                    type: "video",
                    url: "",
                    caption: ""
                }
            ]
        },
        editorConfig:{
            toolboxType:'flyoutToolbox',
            toolboxContent: [...NeopixelBlockConfig.toolBox,...loopsToolbox],
        },        runnerConfig: {
            moduleName:Modules.NeoPixelModule,
            moduleConfig:{
                matrixSize: 11,
                matrixType: MatrixType.BI_DIRECTIONAL,
                testCase:{
                    input: [[5, 5], [10, 10]],
                    expectedOutput: [
                        [[6, 5], [7, 5], [8, 5], [9, 5], [10, 5], [10, 6], [10, 7], [10, 8], [10, 9], [10, 10]],
                        [[5, 6], [5, 7], [5, 8], [5, 9], [5, 10], [6, 10], [7, 10], [8, 10], [9, 10], [10, 10]]
                    ]
                },
                controllerType: ControllerType.blocks
            }
        }
    },
    {
        chapterId:1,
        type:'content',
        content: {
            contentId: 0,
            title: "join two pixels",
            description: "join two right",
            media: [
                {
                    type: "video",
                    url: "",
                    caption: ""
                }
            ]
        },
        editorConfig:{
            toolboxType:'flyoutToolbox',
            toolboxContent: [...NeopixelBlockConfig.toolBox,...loopsToolbox],
        },
        runnerConfig: {
            moduleName:Modules.NeoPixelModule,
            moduleConfig:{
                matrixSize: 11,
                matrixType: MatrixType.BI_DIRECTIONAL,
                testCase:{
                    input: [[5, 5], [10, 10]],
                    expectedOutput: [
                        [[6, 5], [7, 5], [8, 5], [9, 5], [10, 5], [10, 6], [10, 7], [10, 8], [10, 9], [10, 10]],
                        [[5, 6], [5, 7], [5, 8], [5, 9], [5, 10], [6, 10], [7, 10], [8, 10], [9, 10], [10, 10]]
                    ]
                },
                controllerType: ControllerType.blocks
            }
        }
    },
]

interface NeoPixelMatrixProps {
    matrixSize: number;
    matrixType: MatrixType;
    testCase: TestCase;
    controllerType: ControllerType
}


/*
//objects are nested because can contain multiple component state at one time
{
                LED: {
                    active: true,
                    color: 'green'
                },
                Buzzer: {
                    active: true,
                    color: 'green'
                }
            },

            */

export const PlaygroundRunnerContent = [
    {
        initialState: {
            lightSensor: {
                value: 40
            },
            led: {
                active: false,
                color: 'green'
            },
        },
        desiredState: [
            {
                lightSensor: {
                    value: 40
                },
                led: {
                    active: true,
                    color: 'green'
                },

            },
            {
                lightSensor: {
                    value: 40
                },
                led: {
                    active: false,
                    color: 'green'
                },

            },
        ],
    },
    {
        initialState: {
            LED: {
                active: false,
                color: 'green'
            },
        },
        desiredState: {
            LED: {
                active: true,
                color: 'green'
            },
        },

    },
    {
        initialState: {
            LED: {
                active: false,
                color: 'green'
            },
        },
        desiredState: [
            [
                {
                    active: true,
                    color: 'green'
                },
                {
                    active: true,
                    color: 'green'
                }
            ],
            [
                {
                    active: false,
                    color: 'green'
                },
                {
                    active: false,
                    color: 'green'
                }
            ]
        ]

    }
]




