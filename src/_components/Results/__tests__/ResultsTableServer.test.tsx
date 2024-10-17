import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

import { mockRacingHistory } from '@/src/_db/mock-data/mock-race-history';
import { render, screen } from '../../../../test-utils';
import ResultsTableServer from '../server/ResultsTableServer';

afterEach(() => {
  jest.restoreAllMocks();
});

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([mockRacingHistory]),
    })
  ) as jest.Mock;
});

describe('ResultsTableServer', () => {
  test('renders with mockResults when fetch is mocked', async () => {
    const component = await ResultsTableServer({ history: mockRacingHistory.results });
    render(component);

    const firstRace = mockRacingHistory.results[0].races[0];

    const name = new RegExp(`${firstRace.name}`, 'i');
    const category = new RegExp(`${firstRace.category}`, 'i');
    const points = new RegExp(`${firstRace.points}`, 'i');

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(category)).toBeInTheDocument();
    expect(screen.getByText(points)).toBeInTheDocument();
  });
});
