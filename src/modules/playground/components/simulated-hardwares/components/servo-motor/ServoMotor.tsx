import {FC, useEffect, useState} from "react";
import {Button} from "@/modules/common/components/button/Button";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import {setState} from "blockly/core/utils/aria";
import {resetMessageQueue} from "@/utils/pg-comm-channel.util";
import {ComponentLogic} from "@/modules/playground/components/simulated-hardwares/utils/componentLogic";
import {toDegrees} from "blockly/core/utils/math";
import {useSimpleStateViewModel} from "@/modules/playground/components/simulated-hardwares/components/base-custom-hooks/simpleStateViewModel";
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


export const COMPONENT_KEY = 'SERVO_MOTOR'
export const ServoMotor: FC<ServoModuleProps> = ({testCases}) => {
   const {getJsCode} = usePlayground();


    const [state, setState] = useState(0);
    function runCode(){
        runTestCases({}, getJsCode(), testCases, setState).then(r  =>console.log(r))
    }


    return (
        <div className={'flex flex-col items-center p-2 m-2'}>
            <wokwi-servo horn="single" angle={state}></wokwi-servo>
            <Button onClick={()=>{runCode()}} uiType={'primary'}/>

        </div>
    )
}