import RiderDetails from '.';
import { RiderProvider } from '../../../_contexts/Rider/RiderContext';
import { MOCK_COUNTRY, MOCK_DOB, mockRider } from '../../../_db/mock-data/mock-racer';
import { render, screen } from '../../../../test-utils';
import { calculateAge } from '../utils';

const country = new RegExp(`${MOCK_COUNTRY}`, 'i');

const birthDate: Date = new Date(MOCK_DOB);
const age = calculateAge(birthDate);
const dob = new RegExp(`${birthDate.toLocaleDateString()}`, 'i');
const displayedAge = new RegExp(`${age}`, 'i');

describe('RacerInfoBlock', () => {
  test('renders the racer details component as expected', () => {
    render(
      <RiderProvider initialRiderInfo={mockRider} initialRiderTeamMembers={[]}>
        <RiderDetails rider={mockRider} />
      </RiderProvider>
    );

    expect(screen.getByText(country)).toBeInTheDocument();
    expect(screen.getByText(dob)).toBeInTheDocument();
    expect(screen.getByText(displayedAge)).toBeInTheDocument();
  });
});
