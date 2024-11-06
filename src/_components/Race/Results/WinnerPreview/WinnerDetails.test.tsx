import { APP_RIDER_PATH, STRAVA_BASE_URL } from '@/src/global-constants';
import { render, screen } from '@/test-utils';
import WinnerDetails from './WinnerDetails';

const mockWinner = {
  id: 1,
  currentTeam: 'Team ABC',
  name: { first: 'John', last: 'Doe' },
  socials: { strava: 'john-doe', insta: '' },
  hometown: { country: 'USA', city: 'New York' },
  categories: [],
  wins: 10,
};

// Helper to mock React Icons to avoid errors
jest.mock('react-icons/fa', () => ({
  FaStrava: () => <svg data-testid="strava-icon" />,
}));

describe('WinnerDetails', () => {
  it('renders the rider details correctly', () => {
    render(<WinnerDetails winner={mockWinner} />);

    const nameElement = screen.getByText('John Doe');
    expect(nameElement).toBeInTheDocument();
    expect(nameElement.closest('a')).toHaveAttribute('href', `${APP_RIDER_PATH}/1`);

    const teamElement = screen.getByText('Team ABC');
    expect(teamElement).toBeInTheDocument();

    expect(screen.getByText(/Nationality/i)).toBeInTheDocument();
    expect(screen.getByText(/USA/i)).toBeInTheDocument();
    expect(screen.getByText(/Hometown/i)).toBeInTheDocument();
    expect(screen.getByText(/New York/i)).toBeInTheDocument();

    expect(screen.getByText(/Career Wins: 10/i)).toBeInTheDocument();

    const stravaAnchor = screen.getByRole('link', { name: /strava profile of john-doe/i });
    expect(stravaAnchor).toHaveAttribute('href', `${STRAVA_BASE_URL}john-doe`);
    expect(screen.getByTestId('strava-icon')).toBeInTheDocument();
  });

  it('handles missing hometown and team gracefully', () => {
    const winnerWithoutTeam = { ...mockWinner, currentTeam: undefined, hometown: undefined };

    render(<WinnerDetails winner={winnerWithoutTeam} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.queryByText('Team ABC')).toBeNull();
    expect(screen.queryByText('USA')).toBeNull();
    expect(screen.queryByText('New York')).toBeNull();
  });

  it('does not render Strava link when there is no strava profile', () => {
    const winnerWithoutStrava = { ...mockWinner, socials: { strava: undefined } };

    render(<WinnerDetails winner={winnerWithoutStrava} />);

    expect(screen.queryByTestId('strava-icon')).toBeNull();
    expect(screen.queryByRole('link', { name: /strava profile/i })).toBeNull();
  });
});
