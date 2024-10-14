import React from 'react';
import { IRacerInfo } from '@/src/_types';
import { getRiderInfo } from '../api/get-rider-info';
import InfoGrid from '../client/InfoGrid';
import { NameHeadingServer } from './NameHeadingServer';

const DEFAULT_RIDER_NOT_FOUND: IRacerInfo = {
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
  photo:
    'https://dgtzuqphqg23d.cloudfront.net/xpqTav-4hWRXpvJoODOMmpeI_jUOONmJZ6KnCrG7ncc-2048x1536.jpg',
};

interface RiderInfoServerProps {
  id: number;
}

export default async function RiderInfoServer({ id }: RiderInfoServerProps) {
  const riderInfo: IRacerInfo = (await getRiderInfo(id)) || DEFAULT_RIDER_NOT_FOUND;

  if (!riderInfo) {
    return <div>Did not work</div>;
  }

  return (
    <>
      <NameHeadingServer riderInfo={riderInfo} />
      <InfoGrid riderInfo={riderInfo} />
    </>
  );
}
