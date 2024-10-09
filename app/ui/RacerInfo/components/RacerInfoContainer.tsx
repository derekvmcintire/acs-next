'use client';

import { useMemo } from 'react';
import { Flex, Grid } from '@mantine/core';
import { IRacerInfo } from '@/app/types';
import { getCurrentTeam, getMockRiderInfo } from '../utils';
import Details from './Details';
import { NameHeading } from './NameHeading';
import ProfileImage from './ProfileImage';
import TopResults from './TopResults';
import UpcomingRaces from './UpcomingRaces';

export default function RacerInfoContainer() {
  const racerInfo: IRacerInfo = useMemo(getMockRiderInfo, []);
  const currentTeam = useMemo(() => getCurrentTeam(racerInfo.teams), [racerInfo.teams]);

  const { name, socials, dob, categories, hometown } = racerInfo;

  return (
    <>
      <NameHeading name={name} team={currentTeam} />
      <Grid>
        <Grid.Col span={4}>
          <Flex>
            <ProfileImage />
            <Details socials={socials} dob={dob} categories={categories} hometown={hometown} />
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
