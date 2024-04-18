import _ from "lodash";

export const useCodeCompletionHandler = (actualState:any[],expectedStates:any[]) => {

    function processResult(onFailure: (message: string) => void,onSuccess: (message: string) => void) {
        if (actualState.length === 0) return onFailure('No code to execute!')
        if (expectedStates.length === 0 || actualState.length != expectedStates.length) return onFailure('Steps are not equal!')
        if (_.isEqual(actualState, expectedStates)) return onSuccess('Success')
        else return onFailure('Step mismatched!');
    }

    return {processResult}

}