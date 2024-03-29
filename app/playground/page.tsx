import {FC} from 'react';
import {PlayGroundContainer} from "@/modules/playground/components/playground-container/PlaygroundContainer";
import {PlaygroundRunner} from "@/modules/playground/components/playground-runner/PlaygroundRunner";
import {PlaygroundContainerContent} from "@/content/banner-main/playground-container.content";

const PlayGroundPage: FC = () => {
    return (
        <div className={'p-4'}>
            <PlayGroundContainer playgroundContent={PlaygroundContainerContent[0]}/>

        </div>
    )
}

export default PlayGroundPage;
