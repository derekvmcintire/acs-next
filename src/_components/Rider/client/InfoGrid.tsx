'use client';

import React from 'react';
import { Flex, Grid } from '@mantine/core';
import { IRiderInfo } from '@/src/_types';
import ProfileImage from '../server/ProfileImageServer';
import Details from './Details';
import RiderInfoTeam from './RiderInfoTeam';
import TopResults from './TopResults';
import classes from '../styles/rider.module.css';

const INFO_GRID_TEST_ID = 'info-grid';

interface InfoGridProps {
  riderInfo: IRiderInfo;
  riderTeamMembers: IRiderInfo[];
}

export default function InfoGrid({ riderInfo, riderTeamMembers }: InfoGridProps) {
  return (
    <div className={classes.infoGrid} data-testId={INFO_GRID_TEST_ID}>
      <Grid>
        <Grid.Col span={5}>
          <Flex>
            <ProfileImage img={riderInfo.photo} />
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
