import { FC } from 'react';
import { LevelContent } from "@/content/banner-main/level.content";
import { LevelsList } from "@/modules/levels/level/LevelList";
import {Profile} from "@/components/profile";

const LevelsPage: FC = () => {
    return (
        <div className={'p-4'}>
            {/*<LevelsList levels={LevelContent} />*/}
            <Profile/>
        </div>
    )
}

export default LevelsPage;
