'use client';

import { Center } from '@mantine/core';
import React from 'react';
import { GetRaceResultsResponse } from '@/src/_api/get/race/get-race-results-response-type';
import { RaceProvider } from '@/src/_contexts/Race/RaceContext';
import { ExtendedRace } from '@/src/_types';
import PageLayout from '../shared/PageLayout';
import RaceNameHeading from './Results/RaceNameHeading';
import ResultTable from './Results/ResultTable';

export const RACE_INFO_TEST_ID = 'race-info';

interface RaceProps {
  race?: ExtendedRace;
  results?: GetRaceResultsResponse[];
}
export default function Race({ race, results }: RaceProps) {
  return (
    <Center data-testid={RACE_INFO_TEST_ID}>
      <RaceProvider initialRace={race} initialResults={results}>
        <PageLayout>
          <RaceNameHeading />
          <ResultTable />
        </PageLayout>
      </RaceProvider>
    </Center>
  );
}
