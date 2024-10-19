'use client';

import React from 'react';
import { Flex, Grid } from '@mantine/core';
import ProfileImage from '../ProfileImage/ProfileImage';
import RiderDetails from '../RiderDetails/RiderDetails';
import RiderTeamDetails from '../RiderTeamDetails/RiderTeamDetails';
import TopResults from '../TopResults/TopResults';
import classes from '../rider.module.css';

const INFO_GRID_TEST_ID = 'info-grid';

export default function InfoGrid() {
  return (
    <div className={classes.infoGrid} data-testid={INFO_GRID_TEST_ID}>
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
