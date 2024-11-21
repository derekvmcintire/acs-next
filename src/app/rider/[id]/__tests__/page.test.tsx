import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import { mockMultiGlobalFetch } from 'jest-vest';
import { getRiderHistoryRequestUrl } from '@/src/_api/get/history/fetch-history';
import { getSingleRiderRequestUrl, ridersRequestUrl } from '@/src/_api/get/riders/fetch-rider';
import { RIDER_INFO_TEST_ID } from '@/src/_components/Rider';
import { HISTORY_TEST_ID } from '@/src/_components/Rider/History';
import { COLOR_SCHEME_TOGGLE_TEST_ID } from '@/src/_components/shared/ColorSchemeToggle';
import { TOP_NAV_TEST_ID } from '@/src/_components/shared/TopNav';
import { RIDER_SEARCH_DATA_TEST_ID } from '@/src/_components/shared/TopNav/Search';
import { mockRacingHistory } from '@/src/_db/mock-data/mock-race-history';
import { mockRider, mockTeamMembers } from '@/src/_db/mock-data/mock-racer';
import { render, screen } from '@/test-utils';
import RiderPage from '../page';

const mockId = 1;

jest.mock('../../../../_components/shared/TopNav/Search', () => {
  return function MockSearch() {
    return <div data-testid={RIDER_SEARCH_DATA_TEST_ID}>Search</div>;
  };
});

afterEach(() => {
  jest.restoreAllMocks();
});

beforeEach(() => {
  const mockResultSeeds = [
    {
      url: getRiderHistoryRequestUrl(mockId),
      response: mockRacingHistory,
    },
    {
      url: getSingleRiderRequestUrl(mockId),
      response: mockRider,
    },
    {
      url: `${ridersRequestUrl}?team=B2C2%20Cycling%20p%2Fb%20Conte's%20Bike%20Shop`, // @TODO find a better way to get the encoded url for testing, at least use a constant
      response: mockTeamMembers,
    },
  ];
  mockMultiGlobalFetch(mockResultSeeds);
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
