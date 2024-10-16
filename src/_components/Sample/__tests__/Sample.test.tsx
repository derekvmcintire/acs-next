import { render, screen } from '@/test-utils';
import Sample from '../Sample';

describe('Sample', () => {
  it('Renders Something', async () => {
    render(<Sample />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    const doneElement = await screen.findByText(/Done/i);
    expect(doneElement).toBeInTheDocument();
    expect(screen.getByText(/Done/i)).toBeInTheDocument();
  });
});
