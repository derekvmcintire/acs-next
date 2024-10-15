'use client';

import React from 'react';
import { IAgeGroup, ICategory } from '@/src/_types';
import InfoBadge from '../../_ui/InfoBadge';
import { calculateAge, getGFAgeGroup } from '../utils';

const mapCategories = (categories: ICategory[]): React.ReactNode => {
  return categories.map((c: ICategory) => (
    <span key={c.discipline}>
      <InfoBadge>{`${c.discipline}: cat ${c.category}`}</InfoBadge>
    </span>
  ));
};

const calculateAgeGroup = (dob: string): IAgeGroup => {
  const birthDate = new Date(dob);
  const age = calculateAge(birthDate);
  return getGFAgeGroup(age);
};

interface CategoryBadgesType {
  categories: ICategory[];
  dob: string;
}
export default function CategoryBadges({ categories, dob }: CategoryBadgesType) {
  return (
    <>
      {mapCategories(categories)}
      <InfoBadge>{`GF: ${calculateAgeGroup(dob)}`}</InfoBadge>
    </>
  );
}
