import {FC, useState} from "react";
import {Led, LedConfig} from "@/modules/playground/components/simulated-hardwares/components/led/Led";
import {Button} from "@/modules/common/components/button/Button";
import {usePlayground} from "@/modules/playground/providers/playground.provider";
import {
    runTestCases
} from "@/modules/playground/components/simulated-hardwares/components/base-custom-hooks/codeProcessor";
import {Modules} from "@/modules/playground/components/simulated-hardwares/modulesMap";
import {
    ServoMotor, ServoMotorProps
} from "@/modules/playground/components/simulated-hardwares/components/servo-motor/ServoModule";



//refactor this to a separate file
//check for more test cases like multiple modules support
//make base moduele and seprate structure for each module
//migrate all modules to this structure

export interface LedModuleProps {
    testCases: LedTestCase[];
}

interface LedTestCase {
    inputs: any,
    initialState: lightServoState,
    expectedOutput: lightServoState[]
}

interface lightServoState {
    [Modules.LedModule]: LedConfig,
    [Modules.ServoModule]: ServoMotorProps
}

export const LedModule: FC<LedModuleProps> = ({testCases}) => {

    const {getJsCode} = usePlayground();
    const [moduleState, setModuleState] = useState(testCases[0].initialState)

    function updateState(state: any) {
        console.log(JSON.stringify(state),'kfmejkf')
        console.log(JSON.stringify(moduleState),'kfmejkf')
        setModuleState(prevState => {
            return {
                ...prevState,
                ...state
            };
        });

        // setModuleState(prevState => ({...prevState, ...state}))
    }

    function runCode() {
        runTestCases({}, getJsCode(), testCases, updateState).then(r => console.log(r))
    }


    return (
        <div className={'flex flex-col p-3 items-center'}>
            <Led config={moduleState[Modules.LedModule]}/>
        </div>

    )
}
