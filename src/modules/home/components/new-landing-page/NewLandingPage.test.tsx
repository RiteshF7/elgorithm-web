import { render, screen } from '@testing-library/react';
import { NewLandingPage } from './NewLandingPage';
import { ChapterList } from '../chapter-list/ChapterList';
import { HardwareList } from '../hardware-list/HardwareList';

jest.mock('../chapter-list/ChapterList', () => ({
    ChapterList: () => <div>ChapterList</div>,
}));

jest.mock('../hardware-list/HardwareList', () => ({
    HardwareList: () => <div>HardwareList</div>,
}));

describe('NewLandingPage', () => {
    it('renders the ChapterList and HardwareList components', () => {
        render(<NewLandingPage />);
        expect(screen.getByText('ChapterList')).toBeInTheDocument();
        expect(screen.getByText('HardwareList')).toBeInTheDocument();
    });
});
