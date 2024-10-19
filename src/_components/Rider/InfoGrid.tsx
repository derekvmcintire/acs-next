'use client';

import React from 'react';
import { Flex, Grid } from '@mantine/core';
import ProfileImage from './ProfileImage';
import RiderDetails from './RiderDetails';
import RiderTeamDetails from './RiderTeamDetails';
import TopResults from './TopResults';
import classes from './styles/rider.module.css';

const INFO_GRID_TEST_ID = 'info-grid';

export default function InfoGrid() {
  return (
    <div className={classes.infoGrid} data-testId={INFO_GRID_TEST_ID}>
      <Grid>
        <Grid.Col span={5}>
          <Flex>
            <ProfileImage />
            <RiderDetails />
          </Flex>
        </Grid.Col>
        <Grid.Col span={3}>
          <TopResults />
        </Grid.Col>
        <Grid.Col span={4}>
          <RiderTeamDetails />
        </Grid.Col>
      </Grid>
    </div>
  );
}
