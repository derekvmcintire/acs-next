import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

import { mockRacer, TEAM_B2C2_CONTES } from '../../../_db/mock-data/mock-racer';
import { render, screen } from '../../../../test-utils';
import Details from '../server/DetailsServer';
import { RACER_PROFILE_IMAGE_TEST_ID } from '../server/ProfileImageServer';
import RacerInfoContainer from '../server/RiderInfoServer';

afterEach(() => {
  jest.restoreAllMocks();
});

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([mockRacer]),
    })
  ) as jest.Mock;
});

describe('RacerInfoBlock', () => {
  test('renders the racer details component as expected', () => {
    render(Details(mockRacer));

    expect(screen.getByText(/USA/i)).toBeInTheDocument();
    expect(screen.getByText(/Dob/i)).toBeInTheDocument();
    expect(screen.getByText(/cx: 3/i)).toBeInTheDocument();
  });
});

describe('RacerInfoContainer', () => {
  test('renders with mockRiderInfo when fetch is mocked', async () => {
    const component = await RacerInfoContainer({ id: 2 });
    render(component);

    expect(screen.getByText(TEAM_B2C2_CONTES)).toBeInTheDocument();
    expect(screen.getByText(/cx: 3/i)).toBeInTheDocument();
    expect(screen.getByText(/Derek/i)).toBeInTheDocument();
  });

  test('renders expected child components', async () => {
    const component = await RacerInfoContainer({ id: 2 });
    render(component);

    expect(screen.getByText(/Top Results/i)).toBeInTheDocument();
    expect(screen.getByText(/Upcoming Races/i)).toBeInTheDocument();
    expect(screen.getByTestId(RACER_PROFILE_IMAGE_TEST_ID)).toBeInTheDocument();
  });
});