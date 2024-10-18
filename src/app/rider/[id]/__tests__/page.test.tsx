import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

import { getRiderHistoryRequestUrl } from '@/src/_api/get-history';
import { getRidersByTeamRequestUrl, getSingleRiderRequestUrl } from '@/src/_api/get-rider';
import { mockRacingHistory } from '@/src/_db/mock-data/mock-race-history';
import { mockRider, TEAM_B2C2_CONTES } from '@/src/_db/mock-data/mock-racer';
import { mockMultiGlobalFetch } from '@/src/test-helpers';
import { render, screen } from '@/test-utils';
import RiderPage from '../page';

// set up mock responses for global.fetch
const firstExpectedURL = getRiderHistoryRequestUrl(1);
const firstMockResponse = [mockRacingHistory];

const secondExpectedURL = getSingleRiderRequestUrl(1);
const secondMockResponse = [mockRider];

const thirdExpectedURL = getRidersByTeamRequestUrl(TEAM_B2C2_CONTES);
const thirdMockResponse: any[] = [];

const expectedUrls = [firstExpectedURL, secondExpectedURL, thirdExpectedURL];
const expectedMockResponses = [firstMockResponse, secondMockResponse, thirdMockResponse];

afterEach(() => {
  jest.restoreAllMocks();
});

beforeEach(() => {
  // use helper to mock all fetch requests
  mockMultiGlobalFetch(expectedUrls, expectedMockResponses);
  jest.mock('../../../../_components/Rider/client/RiderInfoTeam', () => () => (
    <div>RiderInfoTeam</div>
  ));
});

describe('RacerInfoServer', () => {
  test('renders with mockRiderInfo when fetch is mocked', async () => {
    const pageProps = {
      params: {
        id: 1,
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
