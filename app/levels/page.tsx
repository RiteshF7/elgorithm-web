import {FC} from 'react';
import {PlayGroundContainer} from "@/modules/playground/components/playground-container/PlaygroundContainer";
import {PlaygroundRunner} from "@/modules/playground/components/playground-runner/PlaygroundRunner";
import {Level} from "@/modules/levels/level/Level";
import {LevelContent} from "@/content/banner-main/level.content";
import {LevelsList} from "@/modules/levels/level/LevelList";

const LevelsPage: FC = () => {
    return (
        <div className={'p-4'}>
        <LevelsList levels={LevelContent} />
    </div>
)
}

export default LevelsPage;
