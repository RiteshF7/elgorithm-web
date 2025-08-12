import { render, screen, waitFor } from '@testing-library/react';
import HardwarePlaygroundPage from './page';
import { hardwareMap } from '@/modules/playground/hardware-map';

jest.mock('@/modules/playground/hardware-map', () => ({
    hardwareMap: {
        neopixel: {
            module: 'neo-pixel-module',
            blockConfig: {
                toolBox: [],
            },
        },
    },
}));

jest.mock('@/modules/playground/components/playground-container/PlaygroundContainer', () => ({
    PlayGroundContainer: ({ state }: { state: any }) => (
        <div>
            <h1>{state.content.title}</h1>
            <p>{state.content.description}</p>
        </div>
    ),
}));

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
    useParams: () => ({
        moduleId: 'neopixel',
    }),
}));

describe('HardwarePlaygroundPage', () => {
    it('configures the playground for a specific hardware module', async () => {
        render(<HardwarePlaygroundPage params={{ moduleId: 'neopixel' }} />);
        await waitFor(() => {
            expect(screen.getByText('Play with neopixel')).toBeInTheDocument();
            expect(
                screen.getByText('This is a free playground for the neopixel.')
            ).toBeInTheDocument();
        });
    });
});
