'use client';

import React from 'react';
import { Flex, Grid } from '@mantine/core';
import { IRacerInfo } from '@/app/types';
import Details from './Details';
import ProfileImage from './ProfileImage';
import TopResults from './TopResults';
import UpcomingRaces from './UpcomingRaces';

interface InfoGridProps {
  racerInfo: IRacerInfo;
}

export default function InfoGrid({ racerInfo }: InfoGridProps) {
  const { teams, socials, dob, categories, hometown } = racerInfo;

  return (
    <>
      <Grid>
        <Grid.Col span={6}>
          <Flex>
            <ProfileImage />
            <Details socials={socials} dob={dob} categories={categories} hometown={hometown} />
          </Flex>
        </Grid.Col>
        <Grid.Col span={3}>
          <TopResults />
        </Grid.Col>
        <Grid.Col span={3}>
          <UpcomingRaces />
        </Grid.Col>
      </Grid>
      {teams && teams.map((team) => <p>{`${team.year}: ${team.name}`}</p>)}
    </>
  );
}
