import { mockRacer } from '../../../_db/mock-data/mock-racer';
import { render, screen } from '../../../../test-utils';
import DetailsServer from '../server/DetailsServer';

const firstCategory = `${mockRacer.categories[0].discipline}: ${mockRacer.categories[0].category}`;

const country = new RegExp(`${mockRacer.hometown.country}`, 'i');
const dob = new RegExp(`${mockRacer.dob}`, 'i');
const category = new RegExp(`${firstCategory}`, 'i');

describe('RacerInfoBlock', () => {
  test('renders the racer details component as expected', () => {
    render(DetailsServer(mockRacer));

    expect(screen.getByText(country)).toBeInTheDocument();
    expect(screen.getByText(dob)).toBeInTheDocument();
    expect(screen.getByText(category)).toBeInTheDocument();
  });
});
