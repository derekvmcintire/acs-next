import CategoryBadges from '.';
import { mockRider } from '@/src/_db/mock-data/mock-racer';
import { RiderProvider } from '../../../_contexts/Rider/RiderContext';
import { render, screen } from '../../../../test-utils';
import { calculateAgeGroupFromDob } from '../utils';

const { categories, dob } = mockRider;
const c = categories[0];
const categoryString = new RegExp(`${c.disicpline}: cat ${c.name}`, 'i');
const ageGroupText = dob ? calculateAgeGroupFromDob(dob).text : '';
const gfCategoryString = new RegExp(`GF: ${ageGroupText}`, 'i');

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
