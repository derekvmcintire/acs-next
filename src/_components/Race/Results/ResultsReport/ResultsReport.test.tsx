import React from 'react';
import '@testing-library/jest-dom';
import dayjs from 'dayjs';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import ResultsReport from '.';
import { mockGetRacesTotalsResponse } from '@/src/_api/get/races/fetch-races-response-type';
import { render, screen, waitFor } from '@/test-utils';
import ResultsReportChart from './ResultsReportChart';

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}));

jest.mock('./ResultsReportChart', () => jest.fn(() => <div>Mocked ResultsReportChart</div>));

const mockUseQuery = (overrides: Partial<UseQueryResult> = {}) => {
  (useQuery as jest.Mock).mockReturnValue({
    data: null,
    isError: false,
    error: null,
    isLoading: false,
    ...overrides,
  });
};

describe('ResultsReport', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders error message when there is an error', async () => {
    const error = new Error('Failed to fetch data');
    mockUseQuery({ isError: true, error });

    render(<ResultsReport />);

    expect(
      await screen.findByText(/Something went wront, unable to load data/i)
    ).toBeInTheDocument();
  });

  test('renders chart with data when data is successfully fetched', async () => {
    const mockData = { totals: mockGetRacesTotalsResponse };
    const expectedRacesOne = mockGetRacesTotalsResponse[0].totalRaces;
    const expectedRidersOne = mockGetRacesTotalsResponse[0].totalRiders;
    const expectedRacesTwo = mockGetRacesTotalsResponse[1].totalRaces;
    const expectedRidersTwo = mockGetRacesTotalsResponse[1].totalRiders;

    mockUseQuery({ data: mockData });

    render(<ResultsReport />);

    expect(await screen.findByText(/Mocked ResultsReportChart/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(ResultsReportChart).toHaveBeenCalledWith(
        {
          chartData: [
            {
              name: dayjs(mockData.totals[0].startDate).format('MMM'),
              numberOfRaces: expectedRacesOne,
              numberOfRiders: expectedRidersOne,
            },
            {
              name: dayjs(mockData.totals[1].startDate).format('MMM'),
              numberOfRaces: expectedRacesTwo,
              numberOfRiders: expectedRidersTwo,
            },
          ],
        },
        {}
      );
    });
  });

  test('handles empty totals data gracefully', async () => {
    mockUseQuery({ data: { totals: [] } });

    render(<ResultsReport />);

    expect(screen.getByText('Mocked ResultsReportChart')).toBeInTheDocument();

    await waitFor(() => {
      expect(ResultsReportChart).toHaveBeenCalledWith({ chartData: [] }, {});
    });
  });
});
