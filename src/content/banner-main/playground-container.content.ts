import BlockKeys from "@/utils/playground/workspace/blocks/blockKeys";
import blockKeys from "@/utils/playground/workspace/blocks/blockKeys";
import {
    ControllerType,
    MatrixType
} from "@/modules/playground/components/simulated-hardwares/modules/neopixel-display/types";
import {Modules} from "@/modules/playground/components/simulated-hardwares/utils/modulesMap";
import NeopixelBlockConfig
    from "@/modules/playground/components/simulated-hardwares/modules/neopixel-display/neopixelBlockConfig";
import LedModuleBlockConfig from "@/modules/playground/components/simulated-hardwares/modules/led/ledModuleBlockConfig";
import BuzzerModuleBlockConfig
    from "@/modules/playground/components/simulated-hardwares/modules/buzzer/buzzerModuleBlockConfig";
import ServoModuleBlockConfig
    from "@/modules/playground/components/simulated-hardwares/modules/servo-motor/servoModuleBlockConfig";

export const PlaygroundContainerContent = [
    {
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
    },
    {
        chapterId: 1,
        type: 'content',
        content: {
            contentId: 0,
            title: "Move pixel 1 step left",
            description: "Move pixel 1 step left",
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
            toolboxContent: [BlockKeys.moveLeft],
        },
        runnerConfig: {
            moduleName: Modules.NeoPixelModule,
            moduleConfig: {
                matrixSize: 11,
                matrixType: MatrixType.UNI_DIRECTIONAL,
                testCase: {
                    initialState: [[5, 5]],
                    expectedOutput: [[5, 4]],
                },
                controllerType: ControllerType.blocks
            }
        }
    },
    {
        chapterId: 2,
        type: 'content',
        content: {
            contentId: 0,
            title: "Move 1 step up",
            description: "move one step up",
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
            toolboxContent: [blockKeys.moveUp],
        },
        runnerConfig: {
            moduleName: Modules.NeoPixelModule,
            moduleConfig: {
                matrixSize: 11,
                matrixType: MatrixType.UNI_DIRECTIONAL,
                testCase: {
                    initialState: [[5, 5]],
                    expectedOutput: [[4, 5]],
                },
                controllerType: ControllerType.blocks
            }
        }
    },
    {
        chapterId: 3,
        type: 'content',
        content: {
            contentId: 0,
            title: "Move 1 step down",
            description: "move one step down",
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
            toolboxContent: [blockKeys.moveDown],
        },
        runnerConfig: {
            moduleName: Modules.NeoPixelModule,
            moduleConfig: {
                matrixSize: 11,
                matrixType: MatrixType.UNI_DIRECTIONAL,
                testCase: {
                    initialState: [[5, 5]],
                    expectedOutput: [[6, 5]],
                },
                controllerType: ControllerType.blocks
            }
        }
    },
    {
        chapterId: 4,
        type: 'content',
        content: {
            contentId: 0,
            title: "move pixel 3 steps right",
            description: "move pixel 3 steps right",
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
                    expectedOutput: [[5, 6], [5, 7], [5, 8]]
                },
                controllerType: ControllerType.blocks
            }
        }
    },
    {
        chapterId: 5,
        type: 'content',
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
        editorConfig: {
            toolboxType: 'flyoutToolbox',
            toolboxContent: [...NeopixelBlockConfig.toolBox, BlockKeys.controlsFor],
        }, runnerConfig: {
            moduleName: Modules.NeoPixelModule,
            moduleConfig: {
                matrixSize: 11,
                matrixType: MatrixType.BI_DIRECTIONAL,
                testCase: {
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
        chapterId: 6,
        type: 'content',
        content: {
            contentId: 0,
            title: "make L pattern as shown in animation below",
            description: "make L pattern as shown in animation below [5 down 5 right pattern] can be used in loops",
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
            toolboxContent: [blockKeys.moveRight, blockKeys.moveDown],
        },
        runnerConfig: {
            moduleName: Modules.NeoPixelModule,
            moduleConfig: {
                matrixSize: 11,
                matrixType: MatrixType.UNI_DIRECTIONAL,
                testCase: {
                    initialState: [[5, 5]],
                    expectedOutput: [[6, 5], [7, 5], [8, 5], [9, 5], [10, 5], [10, 6], [10, 7], [10, 8], [10, 9], [10, 10],]
                },
                controllerType: ControllerType.blocks
            }
        }
    },
    {
        chapterId: 7,
        type: 'content',
        content: {
            contentId: 0,
            title: "make L pattern as shown in animation below using loop",
            description: "make L pattern as shown in animation below [5 down 5 right pattern] ",
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
            toolboxContent: [blockKeys.moveRight, blockKeys.moveDown, blockKeys.controlsRepeat],
        },
        runnerConfig: {
            moduleName: Modules.NeoPixelModule,
            moduleConfig: {
                matrixSize: 11,
                matrixType: MatrixType.UNI_DIRECTIONAL,
                testCase: {
                    initialState: [[5, 5]],
                    expectedOutput: [[6, 5], [7, 5], [8, 5], [9, 5], [10, 5], [10, 6], [10, 7], [10, 8], [10, 9], [10, 10],]
                },
                controllerType: ControllerType.blocks
            }
        }
    },
    {
        chapterId: 8,
        type: 'content',
        content: {
            contentId: 0,
            title: "join pixels by making square",
            description: "join two pixels by making square",
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
            toolboxContent: [...NeopixelBlockConfig.toolBox, BlockKeys.controlsRepeat],
        }, runnerConfig: {
            moduleName: Modules.NeoPixelModule,
            moduleConfig: {
                matrixSize: 11,
                matrixType: MatrixType.BI_DIRECTIONAL,
                testCase: {
                    initialState: [[0, 0], [10, 10], [0., 10], [10, 0]],
                    expectedOutput: [
                        [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [10, 1], [10, 2], [10, 3], [10, 4], [10, 5], [10, 6], [10, 7], [10, 8], [10, 9], [10, 10], [9, 10], [8, 10], [7, 10], [6, 10], [5, 10], [4, 10], [3, 10], [2, 10], [1, 10], [0, 10], [0, 9], [0, 8], [0, 7], [0, 6], [0, 5], [0, 4], [0, 3], [0, 2], [0, 1], [0, 0]]
                    ]
                },
                controllerType: ControllerType.blocks
            }
        }
    },
    {
        chapterId: 9,
        type: 'content',
        content: {
            contentId: 0,
            title: "join 2 pixels by making square",
            description: "join 2 two pixels by making square",
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
            toolboxContent: [...NeopixelBlockConfig.toolBox, BlockKeys.controlsRepeat],
        }, runnerConfig: {
            moduleName: Modules.NeoPixelModule,
            moduleConfig: {
                matrixSize: 11,
                matrixType: MatrixType.BI_DIRECTIONAL,
                testCase: {
                    initialState: [[5, 5], [10, 10]],
                    expectedOutput: [
                        [[6, 5], [7, 5], [8, 5], [9, 5], [10, 5], [10, 6], [10, 7], [10, 8], [10, 9], [10, 10], [9, 10], [8, 10], [7, 10], [6, 10], [5, 10], [5, 9], [5, 8], [5, 7], [5, 6], [5, 5]],
                        [[5, 6], [5, 7], [5, 8], [5, 9], [5, 10], [6, 10], [7, 10], [8, 10], [9, 10], [10, 10], [10, 9], [10, 8], [10, 7], [10, 6], [10, 5], [9, 5], [8, 5], [7, 5], [6, 5], [5, 5]]
                    ]
                },
                controllerType: ControllerType.blocks
            }
        }
    },
    {
        chapterId: 10,
        type: 'content',
        content: {
            contentId: 0,
            title: "join 2 adjacent squares by joining pixels as shown in animation below",
            description: "join 2 adjacent squares by joining pixels",
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
            toolboxContent: [...NeopixelBlockConfig.toolBox, BlockKeys.controlsRepeat],
        }, runnerConfig: {
            moduleName: Modules.NeoPixelModule,
            moduleConfig: {
                matrixSize: 11,
                matrixType: MatrixType.BI_DIRECTIONAL,
                testCase: {
                    initialState: [[5, 5], [10, 10], [0, 0]],
                    expectedOutput: [
                        [[6, 5], [7, 5], [8, 5], [9, 5], [10, 5], [10, 6], [10, 7], [10, 8], [10, 9], [10, 10], [9, 10], [8, 10], [7, 10], [6, 10], [5, 10], [5, 9], [5, 8], [5, 7], [5, 6], [5, 5], [5, 4], [5, 3], [5, 2], [5, 1], [5, 0], [4, 0], [3, 0], [2, 0], [1, 0], [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5]],
                    ]
                },
                controllerType: ControllerType.blocks
            }
        }
    },
    {
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
    },
    {
        chapterId: 12,
        type: 'content',
        content: {
            contentId: 0,
            title: "make led blink 2 times",
            description: "make led blink 2 times",
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
            toolboxContent: [blockKeys.blinkLed],
        },
        runnerConfig: {
            moduleNames: [Modules.LedModule],
            moduleConfig: {
                testCases: [
                    {
                        inputs: {},
                        initialState: {[Modules.LedModule]: {active: false, color: 'red'}},
                        expectedOutput: [{
                            [Modules.LedModule]: {
                                active: true,
                                color: 'red'
                            }
                        }, {[Modules.LedModule]: {active: false, color: 'red'}}, {
                            [Modules.LedModule]: {
                                active: true,
                                color: 'red'
                            }
                        }, {[Modules.LedModule]: {active: false, color: 'red'}},]
                    },
                ]

            }
        }
    },
    {
        chapterId: 13,
        type: 'content',
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
        editorConfig: {
            toolboxType: 'flyoutToolbox',
            toolboxContent: [blockKeys.controlsIf, blockKeys.turnOffLed, blockKeys.turnOnLed, blockKeys.lightValue, blockKeys.mathNumber, blockKeys.logicCompare],
        },
        runnerConfig: {
            moduleNames: [Modules.LedModule],
            moduleConfig: {
                testCases: [
                    {
                        inputs: {lightValue: 40},
                        initialState: {[Modules.LedModule]: {active: false, color: 'red'}},
                        expectedOutput: [{[Modules.LedModule]: {active: false, color: 'red'}}]
                    },
                    {
                        inputs: {lightValue: 80},
                        initialState: {[Modules.LedModule]: {active: false, color: 'red'}},
                        expectedOutput: [{[Modules.LedModule]: {active: true, color: 'red'}}]
                    },
                ]

            }
        }
    },
    {
        chapterId: 13,
        type: 'content',
        content: {
            contentId: 0,
            title: "Blink led 2 times if value goes less than 10 and turn led off if value is greater than 10",
            description: "Do it in one go",
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
            toolboxContent: [blockKeys.controlsIf, blockKeys.turnOffLed, blockKeys.turnOnLed, blockKeys.blinkLed, blockKeys.lightValue, blockKeys.mathNumber, blockKeys.logicCompare],
        },
        runnerConfig: {
            moduleNames: [Modules.LedModule,Modules.LCDModule],
            moduleConfig: {
                testCases: [
                    {
                        inputs: {lightValue: 20},
                        initialState: {[Modules.LedModule]: {active: true, color: 'red'},[Modules.LCDModule]:{text:'20'}},
                        expectedOutput: [{[Modules.LedModule]: {active: false, color: 'red'}}]
                    },
                    {
                        inputs: {lightValue: 9},
                        initialState: {[Modules.LedModule]: {active: true, color: 'red'},[Modules.LCDModule]:{text:'9'}},
                        expectedOutput: [{
                            [Modules.LedModule]: {
                                active: true,
                                color: 'red'
                            }
                        }, {[Modules.LedModule]: {active: false, color: 'red'}}, {
                            [Modules.LedModule]: {
                                active: true,
                                color: 'red'
                            }
                        }, {[Modules.LedModule]: {active: false, color: 'red'}}]
                    },
                ]

            }
        }
    },
    {
        chapterId: 5,
        type: 'content',
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
        editorConfig: {
            toolboxType: 'flyoutToolbox',
            toolboxContent: [...ServoModuleBlockConfig.toolBox],
        },
        runnerConfig: {
            moduleNames: [Modules.ServoModule],
            moduleConfig: {
                testCases: [
                    {
                        inputs: {degree: 0},
                        initialState: {[Modules.ServoModule]: {angle: 0}},
                        expectedOutput: [{[Modules.ServoModule]: {angle: 45}}, {[Modules.ServoModule]: {angle: 90}}]
                    },
                ]

            }
        }
    },
    {
        chapterId: 6,
        type: 'content',
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
        editorConfig: {
            toolboxType: 'flyoutToolbox',
            toolboxContent: [...BuzzerModuleBlockConfig.toolBox],
        },
        runnerConfig: {
            moduleNames: [Modules.BuzzerModule],
            moduleConfig: {
                testCases: [
                    {
                        inputs: {},
                        initialState: {[Modules.BuzzerModule]: {buzz: false}},
                        expectedOutput: [{[Modules.BuzzerModule]: {buzz: true}},]
                    },
                ]

            }
        }
    },
    {
        chapterId: 7,
        type: 'content',
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
        editorConfig: {
            toolboxType: 'flyoutToolbox',
            toolboxContent: [...LedModuleBlockConfig.toolBox, ...ServoModuleBlockConfig.toolBox],
        },
        runnerConfig: {
            moduleNames: [Modules.LedModule, Modules.ServoModule],
            moduleConfig: {
                testCases: [
                    {
                        inputs: {degree: 0},
                        initialState: {
                            [Modules.LedModule]: {active: false, color: 'red'},
                            [Modules.ServoModule]: {angle: 0}
                        },
                        expectedOutput: [{
                            [Modules.LedModule]: {
                                active: true,
                                color: 'red'
                            }
                        }, {[Modules.ServoModule]: {angle: 45}}]
                    },
                ]

            }
        }
    },
    {
        chapterId: 8,
        type: 'content',
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
        editorConfig: {
            toolboxType: 'flyoutToolbox',
            toolboxContent: [blockKeys.controlsIf, blockKeys.turnOffLed, blockKeys.turnOnLed, blockKeys.lightValue, blockKeys.mathNumber, blockKeys.logicCompare],
        },
        runnerConfig: {
            moduleNames: [Modules.LedModule],
            moduleConfig: {
                testCases: [
                    {
                        inputs: {lightValue: 40},
                        initialState: {[Modules.LedModule]: {active: false, color: 'red'}},
                        expectedOutput: [{[Modules.LedModule]: {active: false, color: 'red'}}]
                    },
                    {
                        inputs: {lightValue: 80},
                        initialState: {[Modules.LedModule]: {active: false, color: 'red'}},
                        expectedOutput: [{[Modules.LedModule]: {active: true, color: 'red'}}]
                    },
                ]

            }
        }
    },

]




