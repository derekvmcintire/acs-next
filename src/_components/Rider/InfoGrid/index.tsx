'use client';

import { Flex, Grid } from '@mantine/core';
import React from 'react';
import ProfileImage from '../ProfileImage';
import RiderDetails from '../RiderDetails';
import TBD from '../TBD';
import TopResults from '../TopResults';
import classes from '../rider.module.css';

const INFO_GRID_TEST_ID = 'info-grid';

export default function InfoGrid() {
  return (
    <div className={classes.infoGrid} data-testid={INFO_GRID_TEST_ID}>
      <Grid>
        <Grid.Col span={6}>
          <Flex justify="center">
            <ProfileImage />
            <RiderDetails />
          </Flex>
        </Grid.Col>
        <Grid.Col span={6}>
          <Flex justify="flex-end">
            <section className={classes.topResultsWrap}>
              <TopResults />
            </section>
            <TBD />
          </Flex>
        </Grid.Col>
      </Grid>
    </div>
  );
}
