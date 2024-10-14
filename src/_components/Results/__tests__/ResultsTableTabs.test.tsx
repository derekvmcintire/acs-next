import {
  mockRacingHistoryEmpty,
  mockRacingHistoryEmptyYear,
  mockRacingHistoryMissingYear,
} from '@/src/_db/mock-data/mock-race-history';
import { render, screen } from '../../../../test-utils';
import ResultsTableTabs from '../client/ResultsTableTabs';
import { getRaceYears } from '../utils';

describe('ResultsTableTabs', () => {
  it('renders all years provided, even with no races in that year', () => {
    const history = mockRacingHistoryEmptyYear.results;
    const years: number[] = history?.length > 0 ? getRaceYears(history) : [];

    render(<ResultsTableTabs years={years} history={history} />);

    expect(screen.getByTestId('raceTab2024')).toBeInTheDocument();
    expect(screen.getByTestId('raceTab2023')).toBeInTheDocument();
    expect(screen.getByTestId('raceTab2022')).toBeInTheDocument();
  });

  it('renders years provided, even when year is missing', () => {
    const history = mockRacingHistoryMissingYear.results;
    const years: number[] = history?.length > 0 ? getRaceYears(history) : [];

    render(<ResultsTableTabs years={years} history={history} />);

    expect(screen.getByTestId('raceTab2024')).toBeInTheDocument();
    expect(screen.queryByText('raceTab2023')).not.toBeInTheDocument();
    expect(screen.getByTestId('raceTab2022')).toBeInTheDocument();
    expect(screen.getByTestId('raceTab2021')).toBeInTheDocument();
  });

  it('renders no tabs when history is empty', () => {
    const history = mockRacingHistoryEmpty.results;
    const years: number[] = history?.length > 0 ? getRaceYears(history) : [];

    render(<ResultsTableTabs years={years} history={history} />);
    expect(screen.getByText(/No Results Available/i)).toBeInTheDocument();
  });
});
