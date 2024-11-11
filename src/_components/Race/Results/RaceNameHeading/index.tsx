'use client';

import React from 'react';
import { Container, Flex, Text, Title } from '@mantine/core';
import { MdArrowForwardIos, MdLocationOn } from 'react-icons/md';
import { useRaceContext } from '@/src/_contexts/Race/RaceContext';
import { ACS_COLOR_ORANGE } from '@/src/global-constants';
import classes from '../../styles/race-results.module.css';

export default function RaceNameComponent() {
  const { race } = useRaceContext();
  const raceName = race?.event ? race.event.name : '';
  const startDate = race?.startDate;
  const location = race?.location;

  return (
    <Container className={classes.raceHeading}>
      <Title>
        <Text inherit c={ACS_COLOR_ORANGE} span>
          {`${raceName} `}
        </Text>
        <Text span>
          <MdArrowForwardIos />
        </Text>
        <Text span>{` ${startDate}  `}</Text>
      </Title>
      <Flex align="center">
        <Text fw="600" c="dimmed">
          <MdLocationOn />
          {` ${location}`}
        </Text>
      </Flex>
    </Container>
  );
}
