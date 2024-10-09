'use client';

import { useMemo } from 'react';
import { Flex, Text } from '@mantine/core';
import { IRacerInfo } from '@/app/types';
import { getCurrentTeam, getMockRiderInfo } from '../utils';
import RacerInfoBlock from './Details';
import InfoBlock from './InfoBlock';
import { NameHeading } from './NameHeading';
import RacerProfileImage from './ProfileImage';
import classes from '../styles/RacerInfo.module.css';

export default function RacerInfoContainer() {
  const racerInfo: IRacerInfo = useMemo(getMockRiderInfo, []);
  const currentTeam = useMemo(() => getCurrentTeam(racerInfo.teams), [racerInfo.teams]);

  const { name } = racerInfo;

  return (
    <>
      <NameHeading name={name} team={currentTeam} />
      <Flex className={classes.infoGrid}>
        <RacerProfileImage />
        <RacerInfoBlock />
        <InfoBlock>
          <Text>Top Results</Text>
        </InfoBlock>
        <InfoBlock>
          <Text>Upcoming Races</Text>
        </InfoBlock>
      </Flex>
    </>
  );
}
