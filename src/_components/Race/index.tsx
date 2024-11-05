'use client';

import React from 'react';
import { Center } from '@mantine/core';
import { RaceProvider } from '@/src/_contexts/Race/RaceContext';
import { IExistingRace, IResult } from '@/src/_types';
import PageLayout from '../Shared/PageLayout/PageLayout';
import RaceNameHeading from './Results/RaceNameHeading';
import ResultTable from './Results/ResultTable';

export const RACE_INFO_TEST_ID = 'race-info';

interface RaceProps {
  race?: IExistingRace;
  results?: IResult[];
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
