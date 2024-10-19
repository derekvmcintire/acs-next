import { mockRider } from '@/src/_db/mock-data/mock-racer';
import { render, screen } from '../../../../test-utils';
import CategoryBadges from '../client/CategoryBadges';
import { RiderProvider } from '../context/RiderContext';
import { calculateAgeGroupFromDob } from '../utils';

const { categories, dob } = mockRider;
const c = categories[0];
const categoryString = new RegExp(`${c.discipline}: cat ${c.category}`, 'i');
const gfCategoryString = new RegExp(`GF: ${calculateAgeGroupFromDob(dob).text}`, 'i');

describe('CategoryBadges', () => {
  it('renders category badges', () => {
    render(
      <RiderProvider initialRiderInfo={mockRider} initialRiderTeamMembers={[]}>
        <CategoryBadges />
      </RiderProvider>
    );

    expect(screen.getByText(categoryString)).toBeInTheDocument();
    expect(screen.getByText(gfCategoryString)).toBeInTheDocument();
  });
});
