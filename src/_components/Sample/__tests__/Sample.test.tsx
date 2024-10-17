import { mockRacingHistory } from '@/src/_db/mock-data/mock-race-history';
import { mockRider } from '@/src/_db/mock-data/mock-racer';
import { mockMultiGlobalFetch } from '@/src/test-helpers';
import { render, screen } from '@/test-utils';
import Sample from '../Sample';

const firstExpectedURL = 'http://localhost:8000/history?racerId=1';
const firstMockResponse = [mockRacingHistory];

const secondExpectedURL = 'http://localhost:8000/racers?id=1';
const secondMockResponse = [mockRider];

afterEach(() => {
  // restore all mocks after each test
  jest.restoreAllMocks();
});

beforeEach(() => {
  mockMultiGlobalFetch(
    [firstExpectedURL, secondExpectedURL],
    [firstMockResponse, secondMockResponse]
  );
});

describe('Sample', () => {
  it('Renders Something', async () => {
    render(<Sample />);
    // we should initially get a loading state
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();

    const historyResult = mockRacingHistory.results[0].year;
    const riderResult = mockRider.name.first;

    // use await screen.findByText which waits until our mock fetch returns a response
    const histroyElement = await screen.findByText(historyResult);
    expect(histroyElement).toBeInTheDocument();

    const riderElement = await screen.findByText(riderResult);
    expect(riderElement).toBeInTheDocument();
  });
});
