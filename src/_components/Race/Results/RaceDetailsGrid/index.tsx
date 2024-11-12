'use client';

import React from 'react';
import { Flex, SimpleGrid, Stack } from '@mantine/core';
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
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <Stack className={classes.raceDetailsLeft}>
          <WinnerPreview />
          <RaceStats totalRacers={totalRacers} finishers={finishers} countries={countries} />
        </Stack>
        <Stack className={classes.raceDetailsRight}>
          <CourseMap />
        </Stack>
      </SimpleGrid>
    </Flex>
  );
}
