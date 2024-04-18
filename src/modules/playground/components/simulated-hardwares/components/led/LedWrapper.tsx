import {FC, useEffect, useState} from "react";
import {Led, LedConfig} from "@/modules/playground/components/simulated-hardwares/components/led/Led";
import {Button} from "@/modules/common/components/button/Button";
import _ from 'lodash'
import {useSimpleStateViewModel} from "@/modules/playground/components/simulated-hardwares/components/base-custom-hooks/simpleStateViewModel";
import {TestCase} from "@/modules/playground/components/simulated-hardwares/components/neopixel-display/types";

export interface LedModuleProps {
    testCase: LedTestCase;
}

interface LedTestCase{
    input: LedConfig[],
    expectedOutput: LedConfig[]
}

export const LedModule: FC<LedModuleProps> = ({testCase}) => {

    const {runCode,state} = useSimpleStateViewModel<LedConfig>(testCase);



    return (
        <div className={'flex flex-col p-3 items-center'}>
            <Led config={state}/>
            <Button onClick={()=>{runCode()}} uiType={'primary'}/>
        </div>

    )
}
