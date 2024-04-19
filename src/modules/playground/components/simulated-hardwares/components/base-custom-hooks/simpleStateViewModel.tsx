import {usePlayground} from "@/modules/playground/providers/playground.provider";
import {useModuleBaseViewModel} from "@/modules/playground/components/simulated-hardwares/utils/ModuleBaseViewModel";
import _ from "lodash";
import {Dispatch, SetStateAction, useState} from "react";
import {BuzzerState} from "@/modules/playground/components/simulated-hardwares/components/buzzer/Buzzer";
import {
    useCodeExecuter
} from "@/modules/playground/components/simulated-hardwares/components/base-custom-hooks/codeExecuter";
import arg from "arg";
import {
    useCodeCompletionHandler
} from "@/modules/playground/components/simulated-hardwares/components/base-custom-hooks/codeCompletionHandler";
import {
    executeCode, processResult
} from "@/modules/playground/components/simulated-hardwares/components/base-custom-hooks/codeProcessor";


interface CodeExecCallbacks {
    onFailure: (message: string) => void,
    onSuccess: (message: string) => void,
    onCompletion: (actualState: any[], expectedState: any[]) => void,
}

const defaultCallback = {
    onFailure: (message: string) => {
        console.log(message)
    },
    onSuccess: (message: string) => {
        console.log(message)
    },
    onCompletion: (actualState: any[], expectedState: any[]) => {
        console.log(actualState, expectedState)
    },
}


export const useSimpleStateViewModel = <StateType extends {}>(testCase: {
                                                                  initialState: StateType[],
                                                                  expectedOutput: StateType[]
                                                              },
                                                              callbacks: CodeExecCallbacks = defaultCallback) => {
    const expectedStates: StateType[] = _.cloneDeep(testCase.expectedOutput)
    const initialState = testCase.initialState[0]
    const [state, setState] = useState<StateType>(initialState)
    let actualState: any[] = []
    const {moveToNextLevel,getJsCode} = usePlayground()



    function runCode(additionalArgs:any={}) {
        let args = {'changeState': changeState, ...additionalArgs}
        executeCode(args,getJsCode(),handleCodeCompletion)
    }

    async function changeState(state: StateType) {
        actualState.push(state)
        setState(state)
    }

    function handleCodeCompletion() {
        callbacks.onCompletion(actualState, expectedStates);
        processResult(actualState,expectedStates,handleSuccess, handleFailure)
    }

    function handleSuccess(message: string = 'Success') {
        resetModule()
        moveToNextLevel('some id')
        callbacks.onSuccess(message);
    }

    function handleFailure(message: string = 'Failure') {
        console.log('something went wrong!')
        resetModule()
        callbacks.onFailure(message);
    }


    function resetModule() {
        actualState = []
        setState(initialState)
    }

    return {runCode, state}

}