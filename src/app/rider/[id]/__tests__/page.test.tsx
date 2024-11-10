import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

import { getRiderHistoryRequestUrl } from '@/src/_api/get/history/fetch-history';
import { getRiderRequestUrl, getSingleRiderRequestUrl } from '@/src/_api/get/riders/fetch-rider';
import { RIDER_INFO_TEST_ID } from '@/src/_components/Rider';
import { HISTORY_TEST_ID } from '@/src/_components/Rider/History';
import { COLOR_SCHEME_TOGGLE_TEST_ID } from '@/src/_components/shared/ColorSchemeToggle';
import { TOP_NAV_TEST_ID } from '@/src/_components/shared/TopNav';
import { RIDER_SEARCH_DATA_TEST_ID } from '@/src/_components/shared/TopNav/Search';
import { mockRacingHistory } from '@/src/_db/mock-data/mock-race-history';
import { mockRider, mockTeamMembers, TEAM_B2C2_CONTES } from '@/src/_db/mock-data/mock-racer';
import { mockMultiGlobalFetch, mockResponsePackage } from '@/src/_utility/test-helpers';
import { render, screen } from '@/test-utils';
import RiderPage from '../page';

const mockId = 1;

// set up mock responses for global.fetch
const firstMockPackage: mockResponsePackage = {
  expectedUrl: getRiderHistoryRequestUrl(mockId),
  mockResponse: mockRacingHistory,
};
const secondMockPackage: mockResponsePackage = {
  expectedUrl: getSingleRiderRequestUrl(mockId),
  mockResponse: mockRider,
};
const thirdMockPackage: mockResponsePackage = {
  expectedUrl: getRiderRequestUrl({ team: TEAM_B2C2_CONTES }),
  mockResponse: mockTeamMembers,
};
const mockResultsPackages = [firstMockPackage, secondMockPackage, thirdMockPackage];

jest.mock('../../../../_components/shared/TopNav/Search', () => {
  return function MockSearch() {
    return <div data-testid={RIDER_SEARCH_DATA_TEST_ID}>Search</div>;
  };
});

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

    const historyElement = await screen.findByTestId(HISTORY_TEST_ID);
    expect(historyElement).toBeInTheDocument();

    const colorSchemeElement = await screen.findByTestId(COLOR_SCHEME_TOGGLE_TEST_ID);
    expect(colorSchemeElement).toBeInTheDocument();
  });
});
