import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

import { getRiderHistoryRequestUrl } from '@/src/_api/get-history';
import { getRidersByTeamRequestUrl, getSingleRiderRequestUrl } from '@/src/_api/get-rider';
import { mockRacingHistory } from '@/src/_db/mock-data/mock-race-history';
import { mockRider, TEAM_B2C2_CONTES } from '@/src/_db/mock-data/mock-racer';
import { mockMultiGlobalFetch, mockResponsePackage } from '@/src/test-helpers';
import { render, screen } from '@/test-utils';
import RiderPage from '../page';

const mockId = 1;

// set up mock responses for global.fetch
const firstMockPackage: mockResponsePackage = {
  expectedUrl: getRiderHistoryRequestUrl(mockId),
  mockResponse: [mockRacingHistory],
};
const secondMockPackage: mockResponsePackage = {
  expectedUrl: getSingleRiderRequestUrl(mockId),
  mockResponse: [mockRider],
};
const thirdMockPackage: mockResponsePackage = {
  expectedUrl: getRidersByTeamRequestUrl(TEAM_B2C2_CONTES),
  mockResponse: [],
};
const mockResultsPackages = [firstMockPackage, secondMockPackage, thirdMockPackage];

afterEach(() => {
  jest.restoreAllMocks();
});

beforeEach(() => {
  mockMultiGlobalFetch(mockResultsPackages);
});

describe('RacerInfoServer', () => {
  test('renders with mockRiderInfo when fetch is mocked', async () => {
    const pageProps = {
      params: {
        id: mockId,
      },
    };
    const component = await RiderPage(pageProps);
    render(component);

    const topNavElement = await screen.findByTestId('top-nav');
    expect(topNavElement).toBeInTheDocument();

    const riderInfoElement = await screen.findByTestId('rider-info-server');
    expect(riderInfoElement).toBeInTheDocument();

    const historyElement = await screen.findByTestId('results-table-server');
    expect(historyElement).toBeInTheDocument();

    const colorSchemeElement = await screen.findByTestId('color-scheme-toggle');
    expect(colorSchemeElement).toBeInTheDocument();
  });
});
