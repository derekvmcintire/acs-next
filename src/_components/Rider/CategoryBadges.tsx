'use client';

import React from 'react';
import { ICategory } from '@/src/_types';
import InfoBadge from '../ui/InfoBadge';
import { useRider } from './context/RiderContext';
import { calculateAgeGroupFromDob } from './utils';

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
    <div data-testId={CATEGORY_BADGE_TEST_ID}>
      {mapCategories(categories)}
      <InfoBadge>{`GF: ${calculateAgeGroupFromDob(dob).text}`}</InfoBadge>
    </div>
  );
}
