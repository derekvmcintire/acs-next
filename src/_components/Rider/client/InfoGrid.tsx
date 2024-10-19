'use client';

import React from 'react';
import { Flex, Grid } from '@mantine/core';
import { useRider } from '../context/RiderContext';
import Details from './Details';
import ProfileImage from './ProfileImage';
import RiderInfoTeam from './RiderInfoTeam';
import TopResults from './TopResults';
import classes from '../styles/rider.module.css';

const INFO_GRID_TEST_ID = 'info-grid';

export default function InfoGrid() {
  const { riderInfo, riderTeamMembers } = useRider();

  return (
    <div className={classes.infoGrid} data-testId={INFO_GRID_TEST_ID}>
      <Grid>
        <Grid.Col span={5}>
          <Flex>
            <ProfileImage />
            <Details {...riderInfo} />
          </Flex>
        </Grid.Col>
        <Grid.Col span={3}>
          <TopResults {...riderInfo} />
        </Grid.Col>
        <Grid.Col span={4}>
          <RiderInfoTeam members={riderTeamMembers} />
        </Grid.Col>
      </Grid>
    </div>
  );
}
