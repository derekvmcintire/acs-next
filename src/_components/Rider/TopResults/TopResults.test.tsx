import React from 'react';
import { mockRider } from '@/src/_db/mock-data/mock-racer';
import { render, screen } from '@/test-utils';
import { RiderProvider } from '../../../_contexts/RiderContext';
import TopResults from './TopResults';

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
