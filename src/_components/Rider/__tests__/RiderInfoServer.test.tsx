import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

import { mockRider } from '../../../_db/mock-data/mock-racer';
import { render, screen } from '../../../../test-utils';
import { RACER_PROFILE_IMAGE_TEST_ID } from '../server/ProfileImageServer';
import RacerInfoServer from '../server/RiderInfoLayoutServer';

afterEach(() => {
  jest.restoreAllMocks();
});

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([mockRider]),
    })
  ) as jest.Mock;
});

// Having trouble mocking child components
describe('RacerInfoServer', () => {
  test('renders with mockRiderInfo when fetch is mocked', async () => {
    const component = await RacerInfoServer({ riderInfo: mockRider });
    render(component);

    const nameElement = await screen.findByText(/Derek McIntire/i);
    expect(nameElement).toBeInTheDocument();

    const imageElement = await screen.findByTestId(RACER_PROFILE_IMAGE_TEST_ID);
    expect(imageElement).toBeInTheDocument();

    const topResultsElement = await screen.findByTestId('top-results');
    expect(topResultsElement).toBeInTheDocument();
  });
});
