import {usePlayground} from "@/modules/playground/providers/playground.provider";
import {useModuleBaseViewModel} from "@/modules/playground/components/simulated-hardwares/utils/ModuleBaseViewModel";

export const useCodeExecuter = (onCompletion: () => void,
) => {
    const {getJsCode} = usePlayground();
    const functionalArgs: any[] = []
    const functionArgsString: string[] = []


    function execCode(additionalExecCodeArgs: any = {}) {
        for (let key in additionalExecCodeArgs) {
            functionalArgs.push(additionalExecCodeArgs[key])
            functionArgsString.push(key)
        }
        executeCode(functionalArgs, functionArgsString, onCompletion)
    }

    function executeCode(functions: any[], args: string[], completionHandler: () => void) {
        let code = getJsCode()
        if (code != '') {
            let completionHandlerName = 'handleCodeCompletion'
            if (completionHandler.name != completionHandlerName) {
                console.log("please supply codeCompletionHandler function name as **handleCodeCompletion** as params are hardcoded")
                return
            }
            const execute = new Function(...args, 'handleCodeCompletion', code)
            execute(...functions, completionHandler);
        } else console.log('no code found from Js block code generator!')

    }

    return {execCode}
}