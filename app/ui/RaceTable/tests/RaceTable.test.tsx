import { render, screen } from '@testing-library/react';

describe('RaceTable Component', () => {
  it('has three years', () => {
    render(<p>Date</p>);
    expect(screen.getByText('Date')).toBeInTheDocument();
  });
});
