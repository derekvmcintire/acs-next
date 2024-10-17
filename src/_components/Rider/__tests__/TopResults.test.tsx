import React from 'react';
import { mockRider } from '@/src/_db/mock-data/mock-racer';
import { render, screen } from '@/test-utils';
import TopResults from '../client/TopResults';

describe('TopResults', () => {
  it('renders the top results', () => {
    render(<TopResults {...mockRider} />);

    // expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    const titleElement = screen.getByText(/Top Results/i);
    expect(titleElement).toBeInTheDocument();
    const resultElement = screen.getByText(/Mock Top Result/i);
    expect(resultElement).toBeInTheDocument();
  });
});
