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
import LedModuleBlockConfig
    from "@/modules/playground/components/simulated-hardwares/components/led/ledModuleBlockConfig";
import BuzzerModuleBlockConfig
    from "@/modules/playground/components/simulated-hardwares/components/buzzer/buzzerModuleBlockConfig";
import servoModuleBlockConfig
    from "@/modules/playground/components/simulated-hardwares/components/servo-motor/servoModuleBlockConfig";
import ServoModuleBlockConfig
    from "@/modules/playground/components/simulated-hardwares/components/servo-motor/servoModuleBlockConfig";

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
                    initialState: [[5, 5]],
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
                    initialState: [[5, 5]],
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
                    initialState: [[5, 5], [10, 10]],
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
            title: "turn on led",
            description: "turn on led",
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
            toolboxContent: [...LedModuleBlockConfig.toolBox,...ServoModuleBlockConfig.toolBox],
        },
        runnerConfig: {
            moduleName:Modules.LedModule,
            moduleConfig:{
                testCases:[
                    {
                        inputs: {degree: 0},
                        initialState: {[Modules.LedModule]:{active:false,color:'red'},[Modules.ServoModule]:{angle:0}},
                        expectedOutput: [{[Modules.LedModule]:{active:true,color:'red'}},{[Modules.ServoModule]:{angle:45}}]
                    },
                ]

            }
        }
    },
    {
        chapterId:1,
        type:'content',
        content: {
            contentId: 0,
            title: "blink led 3 times",
            description: "turn on led then turn off 3 times",
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
            toolboxContent: [...LedModuleBlockConfig.toolBox,...loopsToolbox],
        },
        runnerConfig: {
            moduleName:Modules.LedModule,
            moduleConfig:{
                testCase:{
                    initialState: [{state:false,color:'red'}],
                    expectedOutput: [{active:true,color:'red'},{active:false,color:'red'},{active:true,color:'red'},{active:false,color:'red'},{active:true,color:'red'},{active:false,color:'red'},]
                },
            }
        }
    },
    {
        chapterId:1,
        type:'content',
        content: {
            contentId: 0,
            title: "blink led 3 times",
            description: "turn on led then turn off 3 times",
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
            toolboxContent: [...BuzzerModuleBlockConfig.toolBox,...loopsToolbox],
        },
        runnerConfig: {
            moduleName:Modules.BuzzerModule,
            moduleConfig:{
                testCase:{
                    initialState: [{state:false}],
                    expectedOutput: [{state:true}]
                },
            }
        }
    },
    {
        chapterId:1,
        type:'content',
        content: {
            contentId: 0,
            title: "servo led 3 times",
            description: "turn on led then turn off 3 times",
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
            toolboxContent: [...servoModuleBlockConfig.toolBox,...loopsToolbox],
        },
        runnerConfig: {
            moduleName:Modules.ServoModule,
            moduleConfig:{
                testCases: [
                    {
                        inputs: {degree: 0},
                        initialState: [0],
                        expectedOutput: [45,90]
                    },
                    {
                        inputs: {degree: 45},
                        initialState: [45],
                        expectedOutput: [90,135]
                    },

                ],
            }
        }
    },
    {
        chapterId:1,
        type:'content',
        content: {
            contentId: 0,
            title: "servo led 3 times",
            description: "turn on led then turn off 3 times",
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
            toolboxContent: [...servoModuleBlockConfig.toolBox,...loopsToolbox],
        },
        runnerConfig: {
            moduleName:Modules.ServoModule,
            moduleConfig:{
                testCases:[
                    {
                        inputs: {lightValue:30},
                        initialState: {active:false,color:'red'},
                        expectedOutput: [{active:true,color:'red'}]
                    },
                    {
                        inputs: {lightValue:80},
                        initialState: {active: true, color: 'red'},
                        expectedOutput: [{active: false, color: 'red'}]
                    },
                ],
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




