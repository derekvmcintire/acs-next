import React from 'react';
import { BASE_URL, RACERS_PATH } from '@/app/mockAPI/constants';
import { IRacerInfo } from '@/app/types';
import { getCurrentTeam } from '../utils';
import InfoGrid from './InfoGrid';
import { NameHeading } from './NameHeading';

interface IRacerInfoContainerProps {
  id: number;
}

export default async function RacerInfoContainer({ id }: IRacerInfoContainerProps) {
  const response = await fetch(`${BASE_URL}${RACERS_PATH}/${id}`);
  const racerInfo: IRacerInfo = await response.json();

  const { name } = racerInfo;
  const currentTeam = getCurrentTeam(racerInfo.teams);

  return (
    <>
      <NameHeading name={name} team={currentTeam} />
      <InfoGrid racerInfo={racerInfo} />
    </>
  );
}
