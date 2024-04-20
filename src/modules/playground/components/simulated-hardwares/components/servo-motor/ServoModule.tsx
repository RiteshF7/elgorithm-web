import {FC, useEffect, useState} from "react";
import {Button} from "@/modules/common/components/button/Button";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import {
    runTestCases
} from "@/modules/playground/components/simulated-hardwares/components/base-custom-hooks/codeProcessor";

interface ServoModuleProps {
    testCases: servoMotorTestCase[];
}

interface servoMotorTestCase {
    inputs: any;
    initialState: number[];
    expectedOutput: number[];
}


export const ServoModule: FC<ServoModuleProps> = ({testCases}) => {
    const {getJsCode} = usePlayground();
    const [state, setState] = useState(0);

    function runCode() {
        runTestCases({}, getJsCode(), testCases, setState).then(r => console.log(r))
    }


    return (
        <div className={'flex flex-col items-center p-2 m-2'}>
            {/*<ServoMotor servoState={state}/>*/}
            <Button onClick={() => {
                runCode()
            }} uiType={'primary'}/>

        </div>
    )
}

export interface ServoMotorProps {
    servoState: ServoState;
}

export interface ServoState{
    angle:number;
}

export const ServoMotor: FC<ServoState> = ({angle}) => {
    return (
        <div className={'flex flex-col items-center p-2 m-2'}>
            <wokwi-servo horn="single" angle={angle}></wokwi-servo>
        </div>
    )
}