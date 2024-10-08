'use client';

import { Flex, Text } from '@mantine/core';
import { IRacerInfo } from '@/app/types';
import { getCurrentTeam, getMockRiderInfo } from '../utils';
import RacerInfoBlock, { RACER_INFO_BLOCK_TEST_ID } from './Details';
import InfoBlock from './InfoBlock';
import { NameHeading } from './NameHeading';
import RacerProfileImage, { RACER_PROFILE_IMAGE_TEST_ID } from './ProfileImage';
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
          <Text>Top Results</Text>
        </InfoBlock>
        <InfoBlock>
          <Text>Upcoming Races</Text>
        </InfoBlock>
      </Flex>
    </>
  );
}
