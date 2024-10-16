'use client';

import React from 'react';
import { Flex, Grid } from '@mantine/core';
import { IRiderInfo } from '@/src/_types';
import ProfileImage from '../server/ProfileImageServer';
import Details from './Details';
import SuggestedRiders from './SuggestedRiders';
import TopResults from './TopResults';

type InfoGridProps = IRiderInfo;

export default function InfoGrid(riderInfo: InfoGridProps) {
  return (
    <Grid>
      <Grid.Col span={5}>
        <Flex>
          <ProfileImage img={riderInfo.photo} />
          <Details {...riderInfo} />
        </Flex>
      </Grid.Col>
      <Grid.Col span={3}>
        <TopResults id={riderInfo.id} />
      </Grid.Col>
      <Grid.Col span={4}>
        <SuggestedRiders />
      </Grid.Col>
    </Grid>
  );
}
