import { FC } from 'react';
import { ChapterList } from '../chapter-list/ChapterList';
import { HardwareList } from '../hardware-list/HardwareList';

export const NewLandingPage: FC = () => {
    return (
        <div>
            <ChapterList />
            <HardwareList />
        </div>
    );
};
