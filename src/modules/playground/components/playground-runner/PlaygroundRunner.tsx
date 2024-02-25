import {FC} from 'react';
import {usePlayground} from "@/modules/playground/providers/playground.provider";

export const PlaygroundRunner: FC = () => {
    const {jsCodeString} = usePlayground()
    return (
        <div className={'basis-4/12 bg-gray-500 rounded-lg flex flex-col h-full'}>
            <h3>Runner</h3>
            <code>
                {jsCodeString}
            </code>
        </div>
    )
}
