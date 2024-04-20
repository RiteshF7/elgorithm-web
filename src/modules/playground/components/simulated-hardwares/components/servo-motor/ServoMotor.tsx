import {FC, useEffect, useState} from "react";


export interface ServoModuleProps {
    testCases: servoMotorTestCase[];
}

interface servoMotorTestCase {
    inputs: any;
    initialState: number[];
    expectedOutput: number[];
}


export const ServoMotor: FC<ServoModuleProps> = ({testCases}) => {


    const [state, setState] = useState(0);

    return (
        <div className={'flex flex-col items-center p-2 m-2'}>
            <wokwi-servo horn="single" angle={state}></wokwi-servo>
        </div>
    )
}