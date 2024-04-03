import {FC} from "react";
import {Button} from "@/modules/common/components/button/Button";
import {usePlayground} from "@/modules/playground/providers/playground.provider";

export interface PlaygroundActionsProps {
    testCasePrams:string[]
}


export const PlaygroundActions: FC<PlaygroundActionsProps> = ({testCasePrams}) => {
    const {runCode, connect} = usePlayground();
    return (
        <div className={'flex flex-row items-center gap-4'}>
            <Button uiType={'primary'} onClick={connect}>Connect</Button>
            <Button uiType={'primary'} onClick={()=>runCode(testCasePrams)}>Run</Button>
        </div>
    )
}
