import {ProblemStatementProps} from "@/modules/playground/components/playground-problem-statement/ProblemStatement";

// export const PlaygrountContent: ProblemStatementProps = {
//     description: "In this problem, we aim to create a system that will control the activation of an LED (Light Emitting Diode) in a specific pattern. The system should be capable of turning on the LED for a predefined duration and repeat this process a total of five times.",
//     problem: "How can we design a system to turn on an LED five times in a controlled manner?"
//
// }
export const PlaygrountContent = {
    Playground:{
        problemQuestion:"some question",
        problemDescription:"some description",
        problemAnimations:['anim link'],
        problemImages:['image link'],
        problemVideos:['video link'],
        isProcodeNeeded:false,
        nextProblemId:'12034',
        prevProblemId:'12033',
        isCompleted:false,
        skippable:false,
        workspace:{
            blocksArray:['loop','forward'],
            enableScroll:false,
            enableZoom:false,
            width:20,
            height:20,
            toolboxOrientation:'horizontal'
        },
        code:{
            solution:{
                hint:{
                    heading:'hint heading',
                    description:'some hint description',
                    imageUrls:['some url'],
                    videoUrls:['some video url'],
                    animationUrls:['some anim urls']
                },
                correctCode:'correct code',

            },
            comparison:[
                {
                    code:'correct code',
                    message:'some message',
                    isCorrect :true
                },
                {
                    code:'potential incorrect code',
                    message:'some message',
                    isCorrect: false
                },
                {
                    code:'potential incorrect code',
                    message:'some message',
                    isCorrect: false
                }
            ]
        }
    }
}