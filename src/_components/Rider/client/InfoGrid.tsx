'use client';

import React from 'react';
import { Flex, Grid } from '@mantine/core';
import { IRacerInfo } from '@/src/_types';
import ProfileImage from '../server/ProfileImageServer';
import Details from './Details';
import SuggestedRiders from './SuggestedRiders';
import TopResults from './TopResults';

type InfoGridProps = IRacerInfo;

export default function InfoGrid({ socials, dob, categories, hometown, photo }: InfoGridProps) {
  return (
    <Grid>
      <Grid.Col span={6}>
        <Flex>
          <ProfileImage img={photo} />
          <Details socials={socials} dob={dob} categories={categories} hometown={hometown} />
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
