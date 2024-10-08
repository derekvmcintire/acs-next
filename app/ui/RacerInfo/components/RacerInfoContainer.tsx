'use client';

import { Flex, Text } from '@mantine/core';
import { IRacerInfo } from '@/app/types';
import { getCurrentTeam, getMockRiderInfo } from '../utils';
import InfoBlock from './InfoBlock';
import RacerInfoBlock from './RacerInfoBlock';
import RacerProfileImage from './RacerProfileImage';
import { RacerTitle } from './RacerTitle';
import classes from '../styles/RacerInfo.module.css';

export default function RacerInfoContainer() {
  const racerInfo: IRacerInfo = getMockRiderInfo();

  return (
    <>
      <RacerTitle name={racerInfo.name} team={getCurrentTeam(racerInfo.teams)} />
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
