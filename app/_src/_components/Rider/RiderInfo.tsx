import React from 'react';
import { BASE_URL, RACERS_PATH } from '@/app/_src/_db/mock-api/constants';
import { IRacerInfo } from '../../_types';
import InfoGrid from './InfoGrid';
import { NameHeading } from './NameHeading';
import { getCurrentTeam } from './utils';

interface IRiderInfoProps {
  id: number;
}

export default async function RiderInfo({ id }: IRiderInfoProps) {
  try {
    const response = await fetch(`${BASE_URL}${RACERS_PATH}?id=${id}`);
    const parsedResponse: IRacerInfo[] = await response.json();
    const racerInfo = parsedResponse[0];

    const { name } = racerInfo;
    const currentTeam = getCurrentTeam(racerInfo.teams);

    return (
      <>
        <NameHeading name={name} team={currentTeam} />
        <InfoGrid racerInfo={racerInfo} />
      </>
    );
  } catch {
    return <div>Did not work</div>;
  }
}
