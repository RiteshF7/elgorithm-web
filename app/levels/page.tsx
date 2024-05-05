import { FC } from 'react';
import { LevelContent } from "@/content/banner-main/level.content";
import { LevelsList } from "@/modules/levels/level/LevelList";

const LevelsPage: FC = () => {
    return (
        <div className={'p-4'}>
            <LevelsList levels={LevelContent} />
        </div>
    )
}

export default LevelsPage;
