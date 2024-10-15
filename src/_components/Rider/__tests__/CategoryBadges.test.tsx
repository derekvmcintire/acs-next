import { buildMockRacerInfo } from '@/src/_db/mock-data/generators/rider/build-rider.mjs';
import { render, screen } from '../../../../test-utils';
import CategoryBadges from '../client/CategoryBadges';
import { calculateAgeGroupFromDob } from '../utils';

const { categories, dob } = buildMockRacerInfo();
const c = categories[0];
const categoryString = new RegExp(`${c.discipline}: cat ${c.category}`, 'i');
const gfCategoryString = new RegExp(`GF: ${calculateAgeGroupFromDob(dob).text}`, 'i');

describe('CategoryBadges', () => {
  it('renders category badges', () => {
    render(CategoryBadges({ categories, dob }));

    expect(screen.getByText(categoryString)).toBeInTheDocument();
    expect(screen.getByText(gfCategoryString)).toBeInTheDocument();
  });
});
