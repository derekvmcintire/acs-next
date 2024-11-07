'use client';

import { Flex, Grid } from '@mantine/core';
import React from 'react';
import { useRider } from '@/src/_contexts/Rider/RiderContext';
import RiderPreview from '../RiderPreview';
import TBD from '../TBD';
import TopResults from '../TopResults';
import classes from '../rider.module.css';

const INFO_GRID_TEST_ID = 'info-grid';

export default function InfoGrid() {
  const { riderInfo } = useRider();
  return (
    <div className={classes.infoGrid} data-testid={INFO_GRID_TEST_ID}>
      <Grid>
        <Grid.Col span={6}>
          <RiderPreview rider={riderInfo} />
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
