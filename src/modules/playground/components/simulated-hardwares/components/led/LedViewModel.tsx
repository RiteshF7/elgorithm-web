import {usePlayground} from "@/modules/playground/providers/playground.provider";
import {useModuleBaseViewModel} from "@/modules/playground/components/simulated-hardwares/utils/ModuleBaseViewModel";
import _ from "lodash";
import {Dispatch, SetStateAction, useState} from "react";
import {BuzzerState} from "@/modules/playground/components/simulated-hardwares/components/buzzer/Buzzer";


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
                                                                  input: StateType[],
                                                                  expectedOutput: StateType[]
                                                              },
                                                              callbacks: CodeExecCallbacks = defaultCallback) => {
    const expectedStates: StateType[] = _.cloneDeep(testCase.expectedOutput)
    const initialState = testCase.input[0]
    const [state, setState] = useState<StateType>(initialState)
    let actualState: any[] = []
    const {executeCode} = useModuleBaseViewModel()
    const {moveToNextLevel} = usePlayground()
    const functionalArgs: Function[] = [changeState]
    const functionArgsString: string[] = [changeState.name]


    function runCode(additionalExecCodeArgs: Function[] = []) {

        additionalExecCodeArgs.forEach((arg: Function) => {
            functionalArgs.push(arg)
            functionArgsString.push(arg.name)
        })
        executeCode(functionalArgs, functionArgsString, handleCodeCompletion)
    }

    async function changeState(state: StateType) {
        actualState.push(state)
        setState(state)
    }


    function handleCodeCompletion() {
        callbacks.onCompletion(actualState, expectedStates);
        if (actualState.length === 0) return handleFailure('No code to execute!')
        if (expectedStates.length === 0 || actualState.length != expectedStates.length) return handleFailure('Steps are not equal!')
        if (_.isEqual(actualState, expectedStates)) return handleSuccess()
        else return handleFailure('Step mismatched!');
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