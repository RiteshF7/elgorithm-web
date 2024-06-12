'use client'
import {FC} from 'react';
import {Button} from "@/modules/common/components/button/Button";
import {localPlaygroundData, localStageData} from "@/modules/modulebuilder/module.db";
import {createStage, fetchAllStages, fetchStageById} from "@/repositories/stageRepo";
import {createSection, fetchSectionById} from "@/repositories/sectionRepo";
import {createModule} from "@/repositories/moduleRepo";
import {createPlayground, fetchPlaygroundById} from "@/repositories/playgroundRepo";


const ModuleBuilder: FC = () => {

    const stageRef = "400473830678593602"
    const sectionRef = "400475005113073730"
    const playgroundRef = "400478625821884480"


    return (
        <main className={'flex flex-col overflow-y-auto max-w-desktop px-2 py-4 '}>
            <div className={'p-4'}>
                <Button uiType={'primary'} onClick={() => {
                    createStage(localStageData).then(r => console.log('stage created successfully!'));
                }}>Create stage</Button>


                <Button uiType={'primary'} onClick={() => {
                    createPlayground(localPlaygroundData).then(r => console.log('playground  created successfully!'));
                }}>Create Playground</Button>

                <Button uiType={'primary'} onClick={() => {
                    // createSection(localStageData).then(r => console.log('stage created successfully!'));
                    fetchStageById(stageRef).then((value:any)=>{
                        createSection({
                            title: 'logical thinking',
                            stage: value.ref
                        }).then(r  =>console.log('section created successfully'))
                    })
                }}>Create section</Button>


                <Button uiType={'primary'} onClick={() => {
                    fetchSectionById(sectionRef).then((section:any)=>{
                        fetchPlaygroundById(playgroundRef).then((playground:any)=>{
                            createModule({
                                title: "turn right ",
                                description: "This is a sample game 1",
                                duration: 10,
                                section:section.ref,
                                playground:playground.ref

                            }).then(r  =>console.log('Module created created successfully'))
                        })

                    })
                }}>Create Module</Button>
            </div>
        </main>
    )
}

export default ModuleBuilder;
