'use client';

import React from 'react';
import { ICategory } from '@/src/_types';
import InfoBadge from '../../ui/InfoBadge';
import { calculateAgeGroupFromDob } from '../utils';

const mapCategories = (categories: ICategory[]): React.ReactNode => {
  return categories.map((c: ICategory) => (
    <span key={c.discipline}>
      <InfoBadge>{`${c.discipline}: cat ${c.category}`}</InfoBadge>
    </span>
  ));
};

const CATEGORY_BADGE_TEST_ID = 'category-badges';

interface CategoryBadgesType {
  categories: ICategory[];
  dob: string;
}
export default function CategoryBadges({ categories, dob }: CategoryBadgesType) {
  return (
    <div data-testId={CATEGORY_BADGE_TEST_ID}>
      {mapCategories(categories)}
      <InfoBadge>{`GF: ${calculateAgeGroupFromDob(dob).text}`}</InfoBadge>
    </div>
  );
}
