import { mockRacingHistory } from '@/app/mock-data/mock';
import { render, screen } from '../../../../test-utils';
import ResultsTable from '../components/ResultsTable';
import RaceTabs from '../components/YearTabs';
import { getRaceYears, sortRacingData } from '../utils';

const raceHistory = sortRacingData(mockRacingHistory.history);
const years = getRaceYears(raceHistory);

describe('YearTab Component', () => {
  it('has three years', () => {
    render(<RaceTabs years={years} history={raceHistory} />);
    expect(screen.getByTestId('raceTab2024')).toBeInTheDocument();
    expect(screen.getByTestId('raceTab2023')).toBeInTheDocument();
    expect(screen.getByTestId('raceTab2022')).toBeInTheDocument();
  });
});

describe('RaceTable Component', () => {
  it('has the right columns', () => {
    render(<ResultsTable races={raceHistory[0].races} />);
    expect(screen.getByText(/Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Result/i)).toBeInTheDocument();
    expect(screen.getByText(/Starters/i)).toBeInTheDocument();
    expect(screen.getByText(/Race Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Category/i)).toBeInTheDocument();
    expect(screen.getByText(/Points/i)).toBeInTheDocument();
  });

  it('renders the mock races', () => {
    render(<ResultsTable races={raceHistory[0].races} />);
    expect(screen.getByText(/Sat Aug 03 2024/i)).toBeInTheDocument();
    expect(screen.getByText(/Green Mountain Stage Race/i)).toBeInTheDocument();
    expect(screen.getByText(/Men Cat 4\/5/i)).toBeInTheDocument();
    expect(screen.getByText(/350.3/i)).toBeInTheDocument();
  });
});
