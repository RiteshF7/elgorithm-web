'use client';
import React, {FC} from 'react';
import {PlaygroundEditor} from "@/modules/playground/components/playground-editor/PlaygroundEditor";
import {PlaygroundProvider} from "@/modules/playground/providers/playground.provider";
import {ProblemStatement} from "@/modules/playground/components/playground-problem-statement/ProblemStatement";
import {PlaygroundContainerContent} from "@/content/banner-main/playground-container.content";
import {PlaygroundRunner} from "@/modules/playground/components/playground-runner/PlaygroundRunner";
import {Button} from "@/modules/common/components/button/Button";
import {fetchPlaygroundById} from "@/repositories/playgroundRepo";


export const PlayGroundContainer: FC = () => {

    const [containerState, setContainerState] = React.useState(PlaygroundContainerContent[14])

    return (
        <PlaygroundProvider>
            <div className={'flex flex-row gap-4  items-center'}>
                <div className={'flex flex-col gap-4 flex-grow'}>
                    <ProblemStatement problem={containerState.content.title}
                                      description={containerState.content.description}/>
                    <PlaygroundEditor editorConfig={containerState.editorConfig}/>
                </div>
                <PlaygroundRunner runnerConfig={containerState.runnerConfig}/>
            </div>
            <Button onClick={async () => {
                // setContainerState(PlaygroundContainerContent[containerState.chapterId + 1])
                // getLevelList().then(r => console.log(r)).catch(e => console.log(e));
                const BASE_URL = process.env.API_ENDPOINT;

                // const result = await fetch(`/api/category/list?detailed=true`)
                // console.log(result.json())
                // Example usage
               // const data =  await getCategoriesByLevel('398942350854848578');
               //  console.log(data,"all data!")
               //  await createLevel({
               //      title: "super Code",
               //      description: "Requires no coding experience. Suitable for age 9-12. Learn logic building from simple games",
               //      bgImageUrl: "/categories/category-1.png",
               //      infoPoints: [
               //          "Simple Logic Building Games",
               //          "Suitable for age 9-12",
               //          "Expert Guided Development"
               //      ],
               //      link: "/categories/no-code",
               //      totalCourses: 10,
               //      totalDuration: 8,
               //      level: "1"
               //  })

                // await createCategory()

                // const playground = await fetchPlaygroundById('399750681950421056');


            }} uiType={'primary'}>NEXT</Button>
        </PlaygroundProvider>
    )
}
