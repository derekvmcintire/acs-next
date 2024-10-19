import { mockRacingHistory } from '@/src/_db/mock-data/mock-race-history';
import { render, screen } from '../../../../test-utils';
import ResultsTable from '../HistoryTable';

describe('RaceTable Component', () => {
  const history = mockRacingHistory.results;

  it('has the right columns', () => {
    render(<ResultsTable results={history[0].races} />);

    expect(screen.getByText(/Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Result/i)).toBeInTheDocument();
    expect(screen.getByText(/Starters/i)).toBeInTheDocument();
    expect(screen.getByText(/Race Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Category/i)).toBeInTheDocument();
    expect(screen.getByText(/Points/i)).toBeInTheDocument();
  });

  it('renders the mock races', () => {
    render(<ResultsTable results={history[0].races} />);

    const firstRace = mockRacingHistory.results[0].races[0];

    const name = new RegExp(`${firstRace.name}`, 'i');
    const category = new RegExp(`${firstRace.category}`, 'i');
    const points = new RegExp(`${firstRace.points}`, 'i');

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(category)).toBeInTheDocument();
    expect(screen.getByText(points)).toBeInTheDocument();
  });
});
