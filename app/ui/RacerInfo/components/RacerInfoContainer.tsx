import React from 'react';
import { buildMockRacerInfo } from '@/app/mockData/generators/racer';
import { IRacerInfo } from '@/app/types';
import { getCurrentTeam } from '../utils';
import InfoGrid from './InfoGrid';
import { NameHeading } from './NameHeading';

export default function RacerInfoContainer() {
  const racerInfo: IRacerInfo = buildMockRacerInfo();
  const currentTeam = getCurrentTeam(racerInfo.teams);

  const { name } = racerInfo;

  return (
    <>
      <NameHeading name={name} team={currentTeam} />
      <InfoGrid racerInfo={racerInfo} />
    </>
  );
}
