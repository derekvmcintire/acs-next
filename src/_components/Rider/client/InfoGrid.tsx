'use client';

import React from 'react';
import { Flex, Grid } from '@mantine/core';
import { IRacerInfo } from '@/src/_types';
import DetailsServer from '../server/DetailsServer';
import ProfileImage from '../server/ProfileImageServer';
import TopResults from './TopResults';
import UpcomingRaces from './UpcomingRaces';

interface InfoGridProps {
  racerInfo: IRacerInfo;
}

export default function InfoGrid({ racerInfo }: InfoGridProps) {
  const { socials, dob, categories, hometown } = racerInfo;

  return (
    <Grid>
      <Grid.Col span={6}>
        <Flex>
          <ProfileImage />
          <DetailsServer socials={socials} dob={dob} categories={categories} hometown={hometown} />
        </Flex>
      </Grid.Col>
      <Grid.Col span={3}>
        <TopResults />
      </Grid.Col>
      <Grid.Col span={3}>
        <UpcomingRaces />
      </Grid.Col>
    </Grid>
  );
}
