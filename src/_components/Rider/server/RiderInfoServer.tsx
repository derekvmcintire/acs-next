import React from 'react';
import { IRiderInfo } from '@/src/_types';
import { getRiderInfo } from '../../../_api/get-rider-info';
import InfoGrid from '../client/InfoGrid';
import { NameHeadingServer } from './NameHeadingServer';

const DEFAULT_RIDER_NOT_FOUND: IRiderInfo = {
  id: 0,
  name: {
    first: 'Rider',
    last: 'Not Found',
  },
  teams: [{ year: 2024, name: 'No Team Available' }],
  socials: {},
  categories: [],
  hometown: { country: 'NO', city: 'Nowhere' },
  dob: '1854-01-01T00:00:00.000-05:00',
  photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
};

interface RiderInfoServerProps {
  id: number;
}

export default async function RiderInfoServer({ id }: RiderInfoServerProps) {
  const riderInfo: IRiderInfo = (await getRiderInfo(id)) || DEFAULT_RIDER_NOT_FOUND;

  if (!riderInfo) {
    return <div>Did not work</div>;
  }

  return (
    <>
      <NameHeadingServer data-testid="name-heading" {...riderInfo} />
      <InfoGrid {...riderInfo} />
    </>
  );
}

// data was not refreshing, so eliminating next.js automatic cache
export const revalidate = 0;
