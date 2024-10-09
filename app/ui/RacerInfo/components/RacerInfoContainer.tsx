'use client';

import { useMemo } from 'react';
import { Flex, Grid, Text } from '@mantine/core';
import { IRacerInfo } from '@/app/types';
import { getCurrentTeam, getMockRiderInfo } from '../utils';
import Details from './Details';
import InfoBlock from './InfoBlock';
import { NameHeading } from './NameHeading';
import RacerProfileImage from './ProfileImage';
import TopResults from './TopResults';
import UpcomingRaces from './UpcomingRaces';
import classes from '../styles/RacerInfo.module.css';

export default function RacerInfoContainer() {
  const racerInfo: IRacerInfo = useMemo(getMockRiderInfo, []);
  const currentTeam = useMemo(() => getCurrentTeam(racerInfo.teams), [racerInfo.teams]);

  const { name } = racerInfo;

  return (
    <>
      <NameHeading name={name} team={currentTeam} />
      <Grid>
        <Grid.Col span={4}>
          <Flex>
            <RacerProfileImage />
            <Details />
          </Flex>
        </Grid.Col>
        <Grid.Col span={4}>
          <TopResults />
        </Grid.Col>
        <Grid.Col span={4}>
          <UpcomingRaces />
        </Grid.Col>
      </Grid>
    </>
  );
}
