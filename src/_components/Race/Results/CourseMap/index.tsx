'use client';

import { Anchor, Container, Image } from '@mantine/core';
import React from 'react';
import classes from '../../styles/race-results.module.css';

export default function CourseMap() {
  return (
    <Container className={classes.courseMap}>
      <Anchor target="blank" href="https://ridewithgps.com/routes/44796948">
        <Image w="100%" radius="sm" src="/card.png" />
      </Anchor>
    </Container>
  );
}
