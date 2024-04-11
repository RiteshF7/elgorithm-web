import {FC} from 'react';
import {PlayGroundContainer} from "@/modules/playground/components/playground-container/PlaygroundContainer";
import {PlaygroundRunner} from "@/modules/playground/components/playground-runner/PlaygroundRunner";

const PlayGroundPage: FC = () => {
    return (
        <div className={'p-4'}>
            <PlayGroundContainer/>
        </div>
    )
}

export default PlayGroundPage;
