import { render, screen, waitFor } from '@testing-library/react';
import StagePage from './page';
import { fetchSectionsByStage } from '@/repositories/sectionRepo';

jest.mock('@/repositories/sectionRepo', () => ({
    fetchSectionsByStage: jest.fn(),
}));

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
    useParams: () => ({
        stageId: '1',
    }),
}));

const mockSections = [
    {
        ref: { id: '1' },
        data: { name: 'Lesson 1', description: 'Description 1' },
    },
    {
        ref: { id: '2' },
        data: { name: 'Lesson 2', description: 'Description 2' },
    },
];

describe('StagePage', () => {
    it('fetches and displays the list of lessons for a given chapter', async () => {
        (fetchSectionsByStage as jest.Mock).mockResolvedValue(mockSections);
        render(<StagePage params={{ stageId: '1' }} />);
        expect(screen.getByText('Lessons')).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.getByText('Lesson 1')).toBeInTheDocument();
            expect(screen.getByText('Lesson 2')).toBeInTheDocument();
        });
    });
});
