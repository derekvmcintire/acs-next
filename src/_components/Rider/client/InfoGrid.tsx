'use client';

import React from 'react';
import { Flex, Grid } from '@mantine/core';
import { IRacerInfo } from '@/src/_types';
import DetailsServer from '../server/DetailsServer';
import ProfileImage from '../server/ProfileImageServer';
import SuggestedRiders from './SuggestedRiders';
import TopResults from './TopResults';

interface InfoGridProps {
  riderInfo: IRacerInfo;
}

export default function InfoGrid({ riderInfo }: InfoGridProps) {
  const { socials, dob, categories, hometown, photo } = riderInfo;

  return (
    <Grid>
      <Grid.Col span={6}>
        <Flex>
          <ProfileImage img={photo} />
          <DetailsServer socials={socials} dob={dob} categories={categories} hometown={hometown} />
        </Flex>
      </Grid.Col>
      <Grid.Col span={3}>
        <TopResults />
      </Grid.Col>
      <Grid.Col span={3}>
        <SuggestedRiders />
      </Grid.Col>
    </Grid>
  );
}
