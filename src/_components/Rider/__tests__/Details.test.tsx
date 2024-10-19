import { mockRider } from '../../../_db/mock-data/mock-racer';
import { render, screen } from '../../../../test-utils';
import Details from '../client/Details';
import { RiderProvider } from '../context/RiderContext';
import { calculateAge } from '../utils';

const country = new RegExp(`${mockRider.hometown.country?.toUpperCase()}`, 'i');

const birthDate: Date = new Date(mockRider.dob);
const age = calculateAge(birthDate);
const dob = new RegExp(`${birthDate.toDateString()}`, 'i');
const displayedAge = new RegExp(`${age}`, 'i');

describe('RacerInfoBlock', () => {
  test('renders the racer details component as expected', () => {
    render(
      <RiderProvider initialRiderInfo={mockRider} initialRiderTeamMembers={[]}>
        <Details />
      </RiderProvider>
    );

    expect(screen.getByText(country)).toBeInTheDocument();
    expect(screen.getByText(dob)).toBeInTheDocument();
    expect(screen.getByText(displayedAge)).toBeInTheDocument();
  });
});
