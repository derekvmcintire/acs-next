import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

import { mockRacer } from '../../../_db/mock-data/mock-racer';
import { render, screen } from '../../../../test-utils';
import { RACER_PROFILE_IMAGE_TEST_ID } from '../server/ProfileImageServer';
import RacerInfoServer from '../server/RiderInfoServer';

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

const firstCategory = `${mockRacer.categories[0].discipline}: cat ${mockRacer.categories[0].category}`;

const category = new RegExp(`${firstCategory}`, 'i');
const firstName = new RegExp(`${mockRacer.name.first}`, 'i');
const currentTeam = new RegExp(`${mockRacer.teams[0].name}`, 'i');

describe('RacerInfoServer', () => {
  test('renders with mockRiderInfo when fetch is mocked', async () => {
    const component = await RacerInfoServer({ id: 2 });
    render(component);

    expect(screen.getByText(currentTeam)).toBeInTheDocument();
    expect(screen.getByText(category)).toBeInTheDocument();
    expect(screen.getByText(firstName)).toBeInTheDocument();
  });

  test('renders expected child components', async () => {
    const component = await RacerInfoServer({ id: 2 });
    render(component);

    expect(screen.getByText(/Top Results/i)).toBeInTheDocument();
    expect(screen.getByText(/Suggested Riders/i)).toBeInTheDocument();
    expect(screen.getByTestId(RACER_PROFILE_IMAGE_TEST_ID)).toBeInTheDocument();
  });
});
