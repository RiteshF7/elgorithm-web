import BlockKeys from "@/utils/playground/workspace/blocks/blockKeys";
import {
    ControllerType,
    MatrixType,
    TestCase
} from "@/modules/playground/components/simulated-hardwares/modules/neopixel-display/types";
import {
    NeoPixelDirect
} from "@/modules/playground/components/simulated-hardwares/modules/neopixel-display/NeoPixelDirect";
import {Modules} from "@/modules/playground/components/simulated-hardwares/utils/modulesMap";
import NeopixelBlockConfig
    from "@/modules/playground/components/simulated-hardwares/modules/neopixel-display/neopixelBlockConfig";
import {loopsToolbox} from "@/utils/playground/workspace/toolbox/core/loopsToolbox";
import LedModuleBlockConfig
    from "@/modules/playground/components/simulated-hardwares/modules/led/ledModuleBlockConfig";
import BuzzerModuleBlockConfig
    from "@/modules/playground/components/simulated-hardwares/modules/buzzer/buzzerModuleBlockConfig";
import servoModuleBlockConfig
    from "@/modules/playground/components/simulated-hardwares/modules/servo-motor/servoModuleBlockConfig";
import ServoModuleBlockConfig
    from "@/modules/playground/components/simulated-hardwares/modules/servo-motor/servoModuleBlockConfig";
import {ifElseToolbox} from "@/utils/playground/workspace/toolbox/core/ifElse";
import {variableToolbox} from "@/utils/playground/workspace/toolbox/core/variablesToolbox";
import inputsBlockConfig from "@/utils/playground/workspace/toolbox/core/inputs/inputsBlockConfig";
import blockKeys from "@/utils/playground/workspace/blocks/blockKeys";

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
            title: "turn on led generic",
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
            toolboxContent: [...LedModuleBlockConfig.toolBox],
        },
        runnerConfig: {
            moduleNames:[Modules.LedModule],
            moduleConfig:{
                testCases:[
                    {
                        inputs: {},
                        initialState: {[Modules.LedModule]:{active:false,color:'red'}},
                        expectedOutput: [{[Modules.LedModule]:{active:true,color:'red'}}]
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
            title: "blink led 2 times",
            description: "blink led 2 times",
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
            toolboxContent: [...LedModuleBlockConfig.toolBox],
        },
        runnerConfig: {
            moduleNames:[Modules.LedModule],
            moduleConfig:{
                testCases:[
                    {
                        inputs: {},
                        initialState: {[Modules.LedModule]:{active:false,color:'green'}},
                        expectedOutput: [{[Modules.LedModule]:{active:true,color:'red'}},{[Modules.LedModule]:{active:false,color:'red'}},{[Modules.LedModule]:{active:true,color:'red'}},{[Modules.LedModule]:{active:false,color:'red'}},]
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
            title: "Turn servo right two times",
            description: "turn servo right two times",
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
            toolboxContent: [...ServoModuleBlockConfig.toolBox],
        },
        runnerConfig: {
            moduleNames:[Modules.ServoModule],
            moduleConfig:{
                testCases:[
                    {
                        inputs: {degree: 0},
                        initialState: {[Modules.ServoModule]:{angle:0}},
                        expectedOutput: [{[Modules.ServoModule]:{angle:45}},{[Modules.ServoModule]:{angle:90}}]
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
            title: "Turn buzzer on",
            description: "Turn buzzer on",
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
            toolboxContent: [...BuzzerModuleBlockConfig.toolBox],
        },
        runnerConfig: {
            moduleNames:[Modules.BuzzerModule],
            moduleConfig:{
                testCases:[
                    {
                        inputs: {},
                        initialState: {[Modules.BuzzerModule]:{buzz:false}},
                        expectedOutput: [{[Modules.BuzzerModule]:{buzz:true}},]
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
            title: "turn lef on then turn servo right",
            description: "Do it in one go",
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
            moduleNames:[Modules.LedModule,Modules.ServoModule],
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
            title: "Turn on led if light value is greater than 60",
            description: "Do it in one go",
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
            toolboxContent: [blockKeys.controlsIf,blockKeys.turnOffLed,blockKeys.turnOnLed,blockKeys.lightValue,blockKeys.mathNumber,blockKeys.logicCompare],
        },
        runnerConfig: {
            moduleNames:[Modules.LedModule],
            moduleConfig:{
                testCases:[
                    {
                        inputs: {lightValue: 40},
                        initialState: {[Modules.LedModule]:{active:false,color:'red'}},
                        expectedOutput: [{[Modules.LedModule]:{active:false,color:'red'}}]
                    },
                    {
                        inputs: {lightValue: 80},
                        initialState: {[Modules.LedModule]:{active:false,color:'red'}},
                        expectedOutput: [{[Modules.LedModule]:{active:true,color:'red'}}]
                    },
                ]

            }
        }
    },

]




