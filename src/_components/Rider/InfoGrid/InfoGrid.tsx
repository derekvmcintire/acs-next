'use client';

import React from 'react';
import { Flex, Grid } from '@mantine/core';
import ProfileImage from '../ProfileImage/ProfileImage';
import RiderDetails from '../RiderDetails/RiderDetails';
import TBD from '../TBD/TBD';
import TopResults from '../TopResults/TopResults';
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
