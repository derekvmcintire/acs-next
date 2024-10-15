import { mockRacer } from '../../../_db/mock-data/mock-racer';
import { render, screen } from '../../../../test-utils';
import Details from '../client/Details';
import { calculateAge } from '../utils';

const country = new RegExp(`${mockRacer.hometown.country?.toUpperCase()}`, 'i');

const birthDate: Date = new Date(mockRacer.dob);
const age = calculateAge(birthDate);
const dob = new RegExp(`${birthDate.toDateString()}`, 'i');
const displayedAge = new RegExp(`${age}`, 'i');

describe('RacerInfoBlock', () => {
  test('renders the racer details component as expected', () => {
    render(Details(mockRacer));

    expect(screen.getByText(country)).toBeInTheDocument();
    expect(screen.getByText(dob)).toBeInTheDocument();
    expect(screen.getByText(displayedAge)).toBeInTheDocument();
  });
});
