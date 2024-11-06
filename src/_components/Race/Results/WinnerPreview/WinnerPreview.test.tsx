import WinnerPreview from '.';
import { mockGetRiderResponse } from '@/src/_api/get/riders/get-riders-response-type';
import { PLACEHOLDER_IMG } from '@/src/_components/Rider/ProfileImage';
import { defaultRaceContextValue, RaceProvider } from '@/src/_contexts/Race/RaceContext';
import { render, screen } from '@/test-utils';

const winnerMock = mockGetRiderResponse;

// Mocking info block and only testing what renders inside it
jest.mock('../../../ui/InfoBlock', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

// Mock the child components
jest.mock('./WinnerDetails', () => ({
  __esModule: true,
  default: ({ winner }: { winner: any }) => (
    <div>
      <h2>
        {winner?.name?.first} {winner?.name?.last}
      </h2>
    </div>
  ),
}));

jest.mock('./WinnerRecentResults', () => ({
  __esModule: true,
  default: () => <div>Recent Results</div>,
}));

describe('WinnerPreview', () => {
  it('renders WinnerDetails and WinnerRecentResults when winner data is available', () => {
    render(
      <RaceProvider
        initialRace={defaultRaceContextValue.race}
        initialResults={defaultRaceContextValue.results}
        initialWinner={winnerMock}
      >
        <WinnerPreview />
      </RaceProvider>
    );

    expect(
      screen.getByText(`${winnerMock.name.first} ${winnerMock.name.last}`)
    ).toBeInTheDocument();
    expect(screen.getByText('Recent Results')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', winnerMock.photo);
  });

  it('renders a placeholder image when no photo is provided', () => {
    const mockWinnerNoPhoto = { ...winnerMock, photo: undefined };
    render(
      <RaceProvider
        initialRace={defaultRaceContextValue.race}
        initialResults={defaultRaceContextValue.results}
        initialWinner={mockWinnerNoPhoto}
      >
        <WinnerPreview />
      </RaceProvider>
    );

    const imageElement = screen.getByRole('img');
    expect(imageElement).toHaveAttribute('src', PLACEHOLDER_IMG);
  });

  it('renders the component when there is no winner', () => {
    render(
      <RaceProvider
        initialRace={defaultRaceContextValue.race}
        initialResults={defaultRaceContextValue.results}
        initialWinner={undefined}
      >
        <WinnerPreview />
      </RaceProvider>
    );

    expect(screen.queryByText('Winner Details')).toBeNull();
    expect(screen.queryByText('Recent Results')).toBeNull();
  });
});
