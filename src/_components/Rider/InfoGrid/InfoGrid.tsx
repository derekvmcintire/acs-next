'use client';

import React from 'react';
import { Flex } from '@mantine/core';
import ProfileImage from '../ProfileImage/ProfileImage';
import RiderDetails from '../RiderDetails/RiderDetails';
import TopResults from '../TopResults/TopResults';
import classes from '../rider.module.css';

const INFO_GRID_TEST_ID = 'info-grid';

export default function InfoGrid() {
  return (
    <div className={classes.infoGrid} data-testid={INFO_GRID_TEST_ID}>
      <Flex>
        <ProfileImage />
        <RiderDetails />
        <TopResults />
      </Flex>
    </div>
  );
}
