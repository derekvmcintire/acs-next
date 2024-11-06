'use client';

import { Container, Flex, Stack } from '@mantine/core';
import React from 'react';
import { useRaceContext } from '@/src/_contexts/Race/RaceContext';
import CourseMap from '../CourseMap';
import RaceStats from '../RaceStats';
import WinnerPreview from '../WinnerPreview';
import classes from '../../styles/race-results.module.css';

const getUniqueCountries = (results: any): string[] => {
  const uniqueCountries = new Set();

  results.forEach((result: any) => {
    const country = result?.rider?.country || '';
    if (country) {
      uniqueCountries.add(country);
    }
  });

  return Array.from(uniqueCountries).map(String);
};

export default function RaceDetailsGrid() {
  const { results } = useRaceContext();

  const totalRacers = results.length;
  const finishers = results.filter((result) => result.place).length;
  const countries: string[] = getUniqueCountries(results);

  return (
    <Flex justify="center" className={classes.winnerDetails}>
      <Container className={classes.raceDetailsLeft}>
        <Stack>
          <WinnerPreview />
          <RaceStats totalRacers={totalRacers} finishers={finishers} countries={countries} />
        </Stack>
      </Container>
      <Flex justify="center" align="center" className={classes.raceDetailsRight}>
        <CourseMap />
      </Flex>
    </Flex>
  );
}
