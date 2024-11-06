'use client';

import { Container } from '@mantine/core';
import React from 'react';
import classes from '../../styles/race-results.module.css';

const DEFAULT_RWGPS_MAP = 'https://ridewithgps.com/embeds?type=route&id=44796948&sampleGraph=true';

export default function CourseMap() {
  return (
    <Container className={classes.courseMapContainer}>
      <iframe
        className={classes.courseMap}
        src={DEFAULT_RWGPS_MAP}
        style={{ width: '1px', minWidth: '100%', height: '525px', border: 'none' }}
        title="Ride with GPS Map"
      />
    </Container>
  );
}
