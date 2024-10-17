'use client';

import React from 'react';
import { Flex, Grid } from '@mantine/core';
import { IRiderInfo } from '@/src/_types';
import ProfileImage from '../server/ProfileImageServer';
import Details from './Details';
import RiderInfoTeam from './RiderInfoTeam';
import TopResults from './TopResults';
import classes from '../styles/rider.module.css';

type InfoGridProps = IRiderInfo;

export default function InfoGrid(riderInfo: InfoGridProps) {
  return (
    <Grid className={classes.infoGrid}>
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
        <RiderInfoTeam team={riderInfo.teams[0].name} />
      </Grid.Col>
    </Grid>
  );
}
