import {
  mockRacingHistory,
  mockRacingHistoryEmpty,
  mockRacingHistoryEmptyYear,
  mockRacingHistoryMissingYear,
} from '@/app/mockData/mockRaceHistory';
import { IRacerHistory } from '@/app/types';
import { render, screen } from '../../../../test-utils';
import ResultsTable from '../components/ResultsTable';
import RaceTabs from '../components/YearTabs';
import { getRaceYears, sortRacingDataByYear } from '../utils';

const getSortedHistory = (racingHistory: IRacerHistory) => {
  const history = sortRacingDataByYear(racingHistory.history);
  const years = getRaceYears(history);
  return { years, history };
};

describe('YearTab Component', () => {
  it('renders all years provided, even with no races in that year', () => {
    const { years, history } = getSortedHistory(mockRacingHistoryEmptyYear);

    render(<RaceTabs years={years} history={history} />);

    expect(screen.getByTestId('raceTab2024')).toBeInTheDocument();
    expect(screen.getByTestId('raceTab2023')).toBeInTheDocument();
    expect(screen.getByTestId('raceTab2022')).toBeInTheDocument();
  });

  it('renders years provided, even when year is missing', () => {
    const { years, history } = getSortedHistory(mockRacingHistoryMissingYear);

    render(<RaceTabs years={years} history={history} />);

    expect(screen.getByTestId('raceTab2024')).toBeInTheDocument();
    expect(screen.queryByText('raceTab2023')).not.toBeInTheDocument();
    expect(screen.getByTestId('raceTab2022')).toBeInTheDocument();
    expect(screen.getByTestId('raceTab2021')).toBeInTheDocument();
  });

  it('renders no tabs when history is empty', () => {
    const { years, history } = getSortedHistory(mockRacingHistoryEmpty);

    render(<RaceTabs years={years} history={history} />);
    expect(screen.getByText(/No Results Available/i)).toBeInTheDocument();
  });
});

describe('RaceTable Component', () => {
  it('has the right columns', () => {
    const { history } = getSortedHistory(mockRacingHistory);

    render(<ResultsTable races={history[0].races} />);
    expect(screen.getByText(/Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Result/i)).toBeInTheDocument();
    expect(screen.getByText(/Starters/i)).toBeInTheDocument();
    expect(screen.getByText(/Race Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Category/i)).toBeInTheDocument();
    expect(screen.getByText(/Points/i)).toBeInTheDocument();
  });

  it('renders the mock races', () => {
    const { history } = getSortedHistory(mockRacingHistory);

    render(<ResultsTable races={history[0].races} />);
    expect(screen.getByText(/Green Mountain Stage Race/i)).toBeInTheDocument();
    expect(screen.getByText(/Men Cat 4\/5/i)).toBeInTheDocument();
    expect(screen.getByText(/350.3/i)).toBeInTheDocument();
  });
});
