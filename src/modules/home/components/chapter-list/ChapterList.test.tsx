import { render, screen, waitFor } from '@testing-library/react';
import { ChapterList } from './ChapterList';
import { fetchAllStages } from '@/repositories/stageRepo';

jest.mock('@/repositories/stageRepo', () => ({
    fetchAllStages: jest.fn(),
}));

const mockStages = [
    {
        ref: { id: '1' },
        data: { name: 'Chapter 1', description: 'Description 1' },
    },
    {
        ref: { id: '2' },
        data: { name: 'Chapter 2', description: 'Description 2' },
    },
];

describe('ChapterList', () => {
    it('fetches and displays the list of chapters', async () => {
        (fetchAllStages as jest.Mock).mockResolvedValue(mockStages);
        render(<ChapterList />);
        expect(screen.getByText('Chapters')).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.getByText('Chapter 1')).toBeInTheDocument();
            expect(screen.getByText('Chapter 2')).toBeInTheDocument();
        });
    });
});
