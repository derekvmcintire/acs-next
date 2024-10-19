import React from 'react';
import { mockRider } from '@/src/_db/mock-data/mock-racer';
import { render, screen } from '@/test-utils';
import TopResults from '../client/TopResults';
import { RiderProvider } from '../context/RiderContext';

describe('TopResults', () => {
  it('renders the top results', () => {
    render(
      <RiderProvider initialRiderInfo={mockRider} initialRiderTeamMembers={[]}>
        <TopResults />
      </RiderProvider>
    );

    const titleElement = screen.getByText(/Top Results/i);
    expect(titleElement).toBeInTheDocument();
    const resultElement = screen.getByText(/Mock Top Result/i);
    expect(resultElement).toBeInTheDocument();
  });
});
