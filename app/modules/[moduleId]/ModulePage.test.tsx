import { render, screen, waitFor } from '@testing-library/react';
import ModulePage from './page';
import { fetchModuleById } from '@/repositories/moduleRepo';

jest.mock('@/repositories/moduleRepo', () => ({
    fetchModuleById: jest.fn(),
}));

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
    useParams: () => ({
        moduleId: '1',
    }),
}));

const mockModule = {
    ref: { id: '1' },
    data: { name: 'Hardware 1', description: 'Description 1' },
};

describe('ModulePage', () => {
    it('displays information about a selected virtual hardware component and a "Continue" button', async () => {
        (fetchModuleById as jest.Mock).mockResolvedValue(mockModule);
        render(<ModulePage params={{ moduleId: '1' }} />);
        await waitFor(() => {
            expect(screen.getByText('Hardware 1')).toBeInTheDocument();
            expect(screen.getByText('Description 1')).toBeInTheDocument();
            expect(screen.getByText('Continue')).toBeInTheDocument();
        });
    });
});
