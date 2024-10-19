import { mockRider } from '@/src/_db/mock-data/mock-racer';
import { RiderProvider } from '../../../_contexts/Rider/RiderContext';
import { render, screen } from '../../../../test-utils';
import { calculateAgeGroupFromDob } from '../utils';
import CategoryBadges from './CategoryBadges';

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
