import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

import { getRiderHistoryRequestUrl } from '@/src/_api/get-history';
import { getRidersByTeamRequestUrl, getSingleRiderRequestUrl } from '@/src/_api/get-rider';
import { RESULTS_TABLE_SERVER_TEST_ID } from '@/src/_components/Rider/History/History';
import { RIDER_INFO_TEST_ID } from '@/src/_components/Rider/Rider';
import { COLOR_SCHEME_TOGGLE_TEST_ID } from '@/src/_components/shared/ColorSchemeToggle/ColorSchemeToggle';
import { TOP_NAV_TEST_ID } from '@/src/_components/shared/TopNav/TopNav';
import { mockRacingHistory } from '@/src/_db/mock-data/mock-race-history';
import { mockRider, mockTeamMembers, TEAM_B2C2_CONTES } from '@/src/_db/mock-data/mock-racer';
import { mockMultiGlobalFetch, mockResponsePackage } from '@/src/_utility/test-helpers';
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
  mockResponse: { riderInfo: mockRider },
};
const thirdMockPackage: mockResponsePackage = {
  expectedUrl: getRidersByTeamRequestUrl(TEAM_B2C2_CONTES),
  mockResponse: { riders: mockTeamMembers },
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

    const topNavElement = await screen.findByTestId(TOP_NAV_TEST_ID);
    expect(topNavElement).toBeInTheDocument();

    const riderInfoElement = await screen.findByTestId(RIDER_INFO_TEST_ID);
    expect(riderInfoElement).toBeInTheDocument();

    const historyElement = await screen.findByTestId(RESULTS_TABLE_SERVER_TEST_ID);
    expect(historyElement).toBeInTheDocument();

    const colorSchemeElement = await screen.findByTestId(COLOR_SCHEME_TOGGLE_TEST_ID);
    expect(colorSchemeElement).toBeInTheDocument();
  });
});
