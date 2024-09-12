import BlockKeys from "@/utils/playground/workspace/blocks/blockKeys";
import {Modules} from "@/modules/playground/components/simulated-hardwares/utils/modulesMap";
import {
    ControllerType,
    MatrixType
} from "@/modules/playground/components/simulated-hardwares/modules/neopixel-display/types";

export enum ProjectTypes {
    VIRTUAL,
    HARDWARE,
    CONTENT
}

export const ProjectsContent = {
    '1': {
        chapterId: 1,
        type: ProjectTypes.CONTENT,
        content: {
            title: "How to Connect & Run",
            description: "How to Connect & Run",
            media: {
                image: {
                    url: "https://picsum.photos/500/400",
                }
            }
            ,
            articleSections: [
                {
                    title: "1. Progressive Web Apps (PWAs)",
                    content: "Progressive Web Apps are becoming increasingly popular due to their ability to provide app-like experiences directly through web browsers. They offer offline functionality, push notifications, and fast loading times, blurring the line between web and native applications."
                },
                {
                    title: "2. WebAssembly",
                    content: "WebAssembly is revolutionizing web performance by allowing developers to run high-performance code in the browser. This opens up new possibilities for complex web applications, including games, video editing tools, and more."
                },
                {
                    title: "3. AI-Powered Development",
                    content: "Artificial Intelligence is making its way into web development, assisting developers with code generation, bug detection, and even design suggestions. This trend is set to significantly boost productivity and innovation in the field."
                }
            ]
        },

    },

}

export const articleSections = [
    {
        title: "1. Progressive Web Apps (PWAs)",
        content: "Progressive Web Apps are becoming increasingly popular due to their ability to provide app-like experiences directly through web browsers. They offer offline functionality, push notifications, and fast loading times, blurring the line between web and native applications."
    },
    {
        title: "2. WebAssembly",
        content: "WebAssembly is revolutionizing web performance by allowing developers to run high-performance code in the browser. This opens up new possibilities for complex web applications, including games, video editing tools, and more."
    },
    {
        title: "3. AI-Powered Development",
        content: "Artificial Intelligence is making its way into web development, assisting developers with code generation, bug detection, and even design suggestions. This trend is set to significantly boost productivity and innovation in the field."
    }
];