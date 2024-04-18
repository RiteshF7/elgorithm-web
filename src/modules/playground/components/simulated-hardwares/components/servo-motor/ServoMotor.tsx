import {FC, useEffect, useState} from "react";
import {Button} from "@/modules/common/components/button/Button";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import {setState} from "blockly/core/utils/aria";
import {resetMessageQueue} from "@/utils/pg-comm-channel.util";
import {ComponentLogic} from "@/modules/playground/components/simulated-hardwares/utils/componentLogic";
import SHCUtils from "@/modules/playground/components/simulated-hardwares/utils/commonUtils";
import {toDegrees} from "blockly/core/utils/math";
import {useSimpleStateViewModel} from "@/modules/playground/components/simulated-hardwares/components/led/LedViewModel";

interface ServoModuleProps {
    testCase: servoMotorTestCase;
}

interface servoMotorTestCase {
    input: number[];
    expectedOutput: number[];
}

export const COMPONENT_KEY = 'SERVO_MOTOR'
export const ServoMotor: FC<ServoModuleProps> = ({testCase}) => {
   const {runCode,state} = useSimpleStateViewModel<number>(testCase);
    let degree = 0;

    return (
        <div className={'flex flex-col items-center p-2 m-2'}>
            <wokwi-servo horn="single" angle={state}></wokwi-servo>
            <Button onClick={()=>{runCode([{degree}])}} uiType={'primary'}/>

        </div>
    )
}