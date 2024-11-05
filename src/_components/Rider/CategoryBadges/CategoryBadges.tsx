'use client';

import React from 'react';
import { ICategory } from '@/src/_types';
import { useRider } from '../../../_contexts/Rider/RiderContext';
import InfoBadge from '../../UI/InfoBadge/InfoBadge';
import { calculateAgeGroupFromDob } from '../utils';

// @TODO Update this. Should use category.name field, not category.category, but will need to update how this data is returned from get rider
const mapCategories = (categories: ICategory[]): React.ReactNode => {
  return categories.map((c: ICategory) => (
    <span key={c.discipline}>
      <InfoBadge>{`${c.discipline}: cat ${c.category}`}</InfoBadge>
    </span>
  ));
};

const CATEGORY_BADGE_TEST_ID = 'category-badges';

export default function CategoryBadges() {
  const { riderInfo } = useRider();
  const { dob, categories } = riderInfo;

  return (
    <div data-testid={CATEGORY_BADGE_TEST_ID}>
      {mapCategories(categories)}
      <InfoBadge>{`GF: ${calculateAgeGroupFromDob(dob).text}`}</InfoBadge>
    </div>
  );
}
