import React from 'react';
import { BASE_URL, RACERS_PATH } from '@/src/_db/mock-api/constants';
import { IRacerInfo } from '../../../_types';
import InfoGrid from '../client/InfoGrid';
import { NameHeadingServer } from './NameHeadingServer';
import { getCurrentTeam } from '../utils';

interface IRiderInfoServerProps {
  id: number;
}

export default async function RiderInfoServer({ id }: IRiderInfoServerProps) {
  try {
    const response = await fetch(`${BASE_URL}${RACERS_PATH}?id=${id}`);
    const parsedResponse: IRacerInfo[] = await response.json();
    const racerInfo = parsedResponse[0];

    const { name } = racerInfo;
    const currentTeam = getCurrentTeam(racerInfo.teams);

    return (
      <>
        <NameHeadingServer name={name} team={currentTeam} />
        <InfoGrid racerInfo={racerInfo} />
      </>
    );
  } catch {
    return <div>Did not work</div>;
  }
}
