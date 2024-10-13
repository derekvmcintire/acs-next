import React from 'react';
import { fetchRacer } from '@/src/_server-utilities/fetchers';
import { IRacerInfo } from '@/src/_types';
import InfoGrid from '../client/InfoGrid';
import { getCurrentTeam } from '../utils';
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
  const racerInfo: IRacerInfo = (await fetchRacer(id)) || DEFAULT_RIDER_NOT_FOUND;

  if (!racerInfo) {
    return <div>Did not work</div>;
  }

  const { name } = racerInfo;
  const currentTeam = getCurrentTeam(racerInfo.teams);

  return (
    <>
      <NameHeadingServer name={name} team={currentTeam} />
      <InfoGrid racerInfo={racerInfo} />
    </>
  );
}
