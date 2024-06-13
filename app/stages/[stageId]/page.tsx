'use client'
import {FC} from "react";
import {fetchSectionsByStage, fetchSectionsWithModulesByStage} from "@/repositories/sectionRepo";
import {fetchModulesBySection} from "@/repositories/moduleRepo";



const getStageData = async (stageId:String): Promise<CategoryModel[]> => {
    const response = await fetch(`http://localhost:3000/api/stage/${stageId}`);
    return response.json() ;
}

// const getStageData = async (stageId: string) => {
//     const sectionsList =  await fetchSectionsWithModulesByStage(stageId)
//     return sectionsList;
// }

const StagePage: FC<{ params: { stageId: string } }> = ({params}) => {

    getStageData(params.stageId).then((res: any) => {
        console.log('start',res[0].modules, 'some stage id')
    })

    return (
        <main className={'flex flex-col overflow-y-auto max-w-desktop px-2 py-4 mx-auto gap-4'}>

        </main>
    );
}

export default StagePage;
