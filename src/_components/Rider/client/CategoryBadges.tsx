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

interface CategoryBadgesType {
  categories: ICategory[];
  dob: string;
}
export default function CategoryBadges({ categories, dob }: CategoryBadgesType) {
  return (
    <>
      {mapCategories(categories)}
      <InfoBadge>{`GF: ${calculateAgeGroupFromDob(dob).text}`}</InfoBadge>
    </>
  );
}
