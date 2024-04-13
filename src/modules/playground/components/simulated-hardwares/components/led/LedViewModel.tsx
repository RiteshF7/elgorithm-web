import {usePlayground} from "@/modules/playground/providers/playground.provider";
import {useModuleBaseViewModel} from "@/modules/playground/components/simulated-hardwares/utils/ModuleBaseViewModel";
import _ from "lodash";



export const useSimpleStateViewModel = (expectedPixelPath: any[],resetCallback = () => {}) => {
    let actualState: any[] = []
    const {executeCode} = useModuleBaseViewModel()
    const {moveToNextLevel} = usePlayground()


    function runCode(functionalArgs: any[], functionArgsString: any[]) {
        executeCode(functionalArgs, functionArgsString, handleCodeCompletion)
    }


    function handleCodeCompletion() {

        if (actualState.length === 0) return handleFailure()

        if (expectedPixelPath.length === 0 || actualState.length != expectedPixelPath.length) return handleFailure()
        console.log('actual',actualState)
        console.log('expected', expectedPixelPath)
        if (_.isEqual(actualState, expectedPixelPath)) return handleSuccess()
        else return handleFailure();
    }

    function handleSuccess(message: string = 'Success') {
        resetModule()
        moveToNextLevel('some id')
    }

    function handleFailure(message: string = 'Failure') {
        console.log('something went wrong!')
        resetModule()
    }


    function resetModule() {
        actualState = []
        resetCallback()
    }

    return{runCode,actualState}

}