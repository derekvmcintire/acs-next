'use client';

import { Flex, Text } from '@mantine/core';
import { IRacerInfo } from '@/app/types';
import { getCurrentTeam, getMockRiderInfo } from '../utils';
import RacerInfoBlock from './Details';
import InfoBlock from './InfoBlock';
import { NameHeading } from './NameHeading';
import RacerProfileImage from './ProfileImage';
import classes from '../styles/RacerInfo.module.css';

export default function RacerInfoContainer() {
  const racerInfo: IRacerInfo = getMockRiderInfo();

  return (
    <>
      <NameHeading name={racerInfo.name} team={getCurrentTeam(racerInfo.teams)} />
      <Flex className={classes.infoGrid}>
        <RacerProfileImage />
        <RacerInfoBlock />
        <InfoBlock>
          <Text>Top Resultz</Text>
        </InfoBlock>
        <InfoBlock>
          <Text>Upcoming Races</Text>
        </InfoBlock>
      </Flex>
    </>
  );
}
