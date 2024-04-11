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

export const PlaygroundContainerContent = [
    {
        question: 'move pixel right',
        description: 'move pixel right',
        blockKeys: [BlockKeys.moveRight, BlockKeys.moveLeft],
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
        question: 'move pixel right 5 times',
        description: 'move pixel right 5 times',
        blockKeys: [BlockKeys.moveRight, BlockKeys.moveLeft],
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
        question: 'Connect two pixels in the shortest distance',
        description: 'move pixel right 5 times',
        blockKeys: [BlockKeys.moveRight, BlockKeys.moveLeft],
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




