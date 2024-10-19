'use client';

import React from 'react';
import { Flex, Grid } from '@mantine/core';
import Details from './Details';
import ProfileImage from './ProfileImage';
import RiderInfoTeam from './RiderInfoTeam';
import TopResults from './TopResults';
import classes from '../styles/rider.module.css';

const INFO_GRID_TEST_ID = 'info-grid';

export default function InfoGrid() {
  return (
    <div className={classes.infoGrid} data-testId={INFO_GRID_TEST_ID}>
      <Grid>
        <Grid.Col span={5}>
          <Flex>
            <ProfileImage />
            <Details />
          </Flex>
        </Grid.Col>
        <Grid.Col span={3}>
          <TopResults />
        </Grid.Col>
        <Grid.Col span={4}>
          <RiderInfoTeam />
        </Grid.Col>
      </Grid>
    </div>
  );
}
