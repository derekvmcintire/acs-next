import RaceDetailsGrid from '.';
import { mockGetRaceResultsResponse } from '@/src/_api/get/results/fetch-race-results-response-type';
import { mockGetRiderResponse } from '@/src/_api/get/riders/fetch-riders-response-type';
import { defaultRaceContextValue, RaceProvider } from '@/src/_contexts/Race/RaceContext';
import { render, screen } from '@/test-utils';

const winnerMock = mockGetRiderResponse;
const resultsMock = mockGetRaceResultsResponse;

// Mock the necessary imports
jest.mock('../CourseMap', () => ({
  __esModule: true,
  default: () => <div>Course Map</div>,
}));
jest.mock('../RaceStats', () => ({
  __esModule: true,
  default: ({ totalRacers, finishers, countries }: any) => (
    <div>
      {totalRacers} Racers, {finishers} Finishers, Countries: {countries.join(', ')}
    </div>
  ),
}));
jest.mock('../WinnerPreview', () => ({
  __esModule: true,
  default: () => <div>Winner Preview</div>,
}));

describe('RaceDetailsGrid', () => {
  it('renders the component and child components when results are available', () => {
    render(
      <RaceProvider
        initialRace={defaultRaceContextValue.race}
        initialResults={resultsMock}
        initialWinner={winnerMock}
      >
        <RaceDetailsGrid />
      </RaceProvider>
    );

    expect(screen.getByText('Winner Preview')).toBeInTheDocument();
    expect(
      screen.getByText('2 Racers, 1 Finishers, Countries: Indonesia, Switzerland')
    ).toBeInTheDocument();
    expect(screen.getByText('Course Map')).toBeInTheDocument();
  });

  it('does not break when results are empty', () => {
    render(
      <RaceProvider
        initialRace={defaultRaceContextValue.race}
        initialResults={defaultRaceContextValue.results}
        initialWinner={defaultRaceContextValue.winner}
      >
        <RaceDetailsGrid />
      </RaceProvider>
    );

    // Check if the component renders correctly even with no results
    expect(screen.getByText('Winner Preview')).toBeInTheDocument();
    expect(screen.getByText('0 Racers, 0 Finishers, Countries:')).toBeInTheDocument();
    expect(screen.getByText('Course Map')).toBeInTheDocument();
  });
});
