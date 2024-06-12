import blockKeys from "@/utils/playground/workspace/blocks/blockKeys";
import {Modules} from "@/modules/playground/components/simulated-hardwares/utils/modulesMap";
import {
    ControllerType,
    MatrixType
} from "@/modules/playground/components/simulated-hardwares/modules/neopixel-display/types";

export const localStageData =
    {
        title: "Test Code to ",
        description:
            "Requires no coding experience. Suitable for age 9-12. Learn logic building from simple games",
        bgImageUrl: "/categories/category-1.png",
        infoPoints: [
            "Simple Logic Building Games",
            "Suitable for age 9-12",
            "Expert Guided Development",
        ],
        link: "/categories/no-code",
        totalCourses: 10,
        totalDuration: 8,
        level: "1",
    }

    export const localSectionData = {
                title:'Logical building',
                stage: ""
    }

    export const localPlaygroundData =     {
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


        export const localModuleData = {
        title: "turn right ",
        description: "This is a sample game 1",
        duration: 10,
        playground:'Ref(Collection("Playgrounds"), "399693427701186624")'
    }



