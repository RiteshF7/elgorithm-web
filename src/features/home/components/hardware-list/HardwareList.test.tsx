import { render, screen, waitFor } from '@testing-library/react';
import { HardwareList } from './HardwareList';
import { fetchAllModules } from '@/repositories/moduleRepo';

jest.mock('@/repositories/moduleRepo', () => ({
    fetchAllModules: jest.fn(),
}));

const mockModules = [
    {
        ref: { id: '1' },
        data: { name: 'Hardware 1', description: 'Description 1' },
    },
    {
        ref: { id: '2' },
        data: { name: 'Hardware 2', description: 'Description 2' },
    },
];

describe('HardwareList', () => {
    it('fetches and displays the list of hardware', async () => {
        (fetchAllModules as jest.Mock).mockResolvedValue(mockModules);
        render(<HardwareList />);
        expect(screen.getByText('Virtual Hardware')).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.getByText('Hardware 1')).toBeInTheDocument();
            expect(screen.getByText('Hardware 2')).toBeInTheDocument();
        });
    });
});
