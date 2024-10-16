import React from 'react';
import { mockRacingHistory } from '@/src/_db/mock-data/mock-race-history';
import { render, screen } from '@/test-utils';
import TopResults from '../client/TopResults';

const mockResponse = [mockRacingHistory];

afterEach(() => {
  jest.restoreAllMocks();
});

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockResponse),
    })
  ) as jest.Mock;
});

describe('TopResults', () => {
  it('renders the top results', async () => {
    render(<TopResults id={1} />);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    const titleElement = await screen.findByText(/Top Results/i);
    expect(titleElement).toBeInTheDocument();
    const resultElement = await screen.findByText(/Kilowatt Cross Day 1/i);
    expect(resultElement).toBeInTheDocument();
  });
});
