'use client';

import React from 'react';
import { GetCategoriesResponse } from '@/src/_api/get/categories/get-categories-response-type';
import { useRider } from '../../../_contexts/Rider/RiderContext';
import InfoBadge from '@/src/_components/ui/InfoBadge';
import { calculateAgeGroupFromDob } from '../utils';

// @TODO Update this. Should use category.name field, not category.category, but will need to update how this data is returned from get rider
const mapCategories = (categories: GetCategoriesResponse[]): React.ReactNode => {
  return categories.map((c: GetCategoriesResponse) => (
    <span key={c.disicpline}>
      <InfoBadge>{`${c.disicpline}: cat ${c.name}`}</InfoBadge>
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
      {dob && <InfoBadge>{`GF: ${calculateAgeGroupFromDob(dob).text}`}</InfoBadge>}
    </div>
  );
}
