'use client'
import {FC} from "react";
import {fetchSectionsByStage} from "@/repositories/sectionRepo";


//
// const getCategoryList = async (stageId:String): Promise<CategoryModel[]> => {
//     const response = await fetch(`http://localhost:3000/api/stage/${stageId}`);
//     return response.json() ;
// }

const getStageData = async (stageId: string) => {
    return await fetchSectionsByStage(stageId)
}

const StagePage: FC<{ params: { stageId: string } }> = ({params}) => {

    console.log(params.stageId,'test!')
    getStageData(params.stageId).then((res: any) => {
        console.log(res, 'some stage id')
    })

    return (
        <main className={'flex flex-col overflow-y-auto max-w-desktop px-2 py-4 mx-auto gap-4'}>

        </main>
    );
}

export default StagePage;
