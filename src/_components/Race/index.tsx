'use client';

import { Center } from '@mantine/core';
import React from 'react';
import { GetRaceResultsResponse } from '@/src/_api/get/results/fetch-race-results-response-type';
import { GetRiderResponse } from '@/src/_api/get/riders/fetch-riders-response-type';
import { RaceProvider } from '@/src/_contexts/Race/RaceContext';
import { ExtendedRace } from '@/src/_types/extended-types';
import PageLayout from '../shared/PageLayout';
import RaceDetailsGrid from './Results/RaceDetailsGrid';
import RaceNameHeading from './Results/RaceNameHeading';
import ResultTable from './Results/ResultTable';

export const RACE_INFO_TEST_ID = 'race-info';

interface RaceProps {
  race?: ExtendedRace;
  results?: GetRaceResultsResponse[];
  winner?: GetRiderResponse;
}
export default function Race({ race, results, winner }: RaceProps) {
  return (
    <Center data-testid={RACE_INFO_TEST_ID}>
      <RaceProvider initialRace={race} initialResults={results} initialWinner={winner}>
        <PageLayout>
          <RaceNameHeading />
          <RaceDetailsGrid />
          <ResultTable />
        </PageLayout>
      </RaceProvider>
    </Center>
  );
}
