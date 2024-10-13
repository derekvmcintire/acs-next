import React from 'react';
import { BASE_URL, RACERS_PATH } from '@/app/mockAPI/constants';
import { IRacerInfo } from '../../../types';
import { getCurrentTeam } from '../utils';
import InfoGrid from './InfoGrid';
import { NameHeading } from './NameHeading';

interface IRacerInfoContainerProps {
  id: number;
}

export default async function RacerInfoContainer({ id }: IRacerInfoContainerProps) {
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
