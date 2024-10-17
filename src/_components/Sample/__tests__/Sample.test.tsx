import { getRiderHistoryRequestUrl } from '@/src/_api/get-history';
import { getSingleRiderRequestUrl } from '@/src/_api/get-rider';
import { mockRacingHistory } from '@/src/_db/mock-data/mock-race-history';
import { mockRider } from '@/src/_db/mock-data/mock-racer';
import { mockMultiGlobalFetch } from '@/src/test-helpers';
import { render, screen } from '@/test-utils';
import Sample from '../Sample';

// set up mock responses for global.fetch
const firstExpectedURL = getRiderHistoryRequestUrl(1);
const firstMockResponse = [mockRacingHistory];

const secondExpectedURL = getSingleRiderRequestUrl(1);
const secondMockResponse = [mockRider];

const expectedUrls = [firstExpectedURL, secondExpectedURL];
const expectedMockResponses = [firstMockResponse, secondMockResponse];

afterEach(() => {
  // restore all mocks after each test
  jest.restoreAllMocks();
});

beforeEach(() => {
  // use helper to mock all fetch requests
  mockMultiGlobalFetch(expectedUrls, expectedMockResponses);
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
