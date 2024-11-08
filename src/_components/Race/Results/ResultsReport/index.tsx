'use client';

import { Text } from '@mantine/core';
import React from 'react';

export type ResultReport = {
  month: string;
  numberOfRaces: number;
  numberOfRiders: number;
};

export const mockResultReports: ResultReport[] = [
  {
    month: 'March',
    numberOfRaces: 14,
    numberOfRiders: 253,
  },
  {
    month: 'April',
    numberOfRaces: 25,
    numberOfRiders: 366,
  },
  {
    month: 'May',
    numberOfRaces: 27,
    numberOfRiders: 403,
  },
  {
    month: 'June',
    numberOfRaces: 33,
    numberOfRiders: 512,
  },
  {
    month: 'July',
    numberOfRaces: 41,
    numberOfRiders: 678,
  },
];

export default function ResultsReport() {
  return <Text>Chart coming soon...</Text>;
}
