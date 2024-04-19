import {FC, useEffect, useState} from "react";
import {Led, LedConfig} from "@/modules/playground/components/simulated-hardwares/components/led/Led";
import {Button} from "@/modules/common/components/button/Button";
import _ from 'lodash'
import {useSimpleStateViewModel} from "@/modules/playground/components/simulated-hardwares/components/base-custom-hooks/simpleStateViewModel";
import {TestCase} from "@/modules/playground/components/simulated-hardwares/components/neopixel-display/types";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import {
    runTestCases
} from "@/modules/playground/components/simulated-hardwares/components/base-custom-hooks/codeProcessor";

export interface LedModuleProps {
    testCases: LedTestCase[];
}

interface LedTestCase{
    inputs: any,
    initialState: LedConfig,
    expectedOutput: LedConfig[]
}

export const LedModule: FC<LedModuleProps> = ({testCases}) => {

    const {getJsCode} = usePlayground();
    const [state, setState] = useState(testCases[0].initialState);

    function runCode() {
        runTestCases({}, getJsCode(), testCases, setState).then(r => console.log(r))
    }



    return (
        <div className={'flex flex-col p-3 items-center'}>
            <Led config={state}/>
            <Button onClick={()=>{runCode()}} uiType={'primary'}/>
        </div>

    )
}
