'use client';

import { Container, Text } from '@mantine/core';
import React from 'react';
import InfoBlock from '@/src/_components/ui/InfoBlock';
import LabeledText from '@/src/_components/ui/LabeledText';

interface RaceStatsProps {
  totalRacers: number;
  finishers: number;
  countries: string[];
}
export default function RaceStats({ totalRacers, finishers, countries }: RaceStatsProps) {
  return (
    <InfoBlock title="Race Stats">
      <Container>
        <LabeledText label="Total Racers" text={String(totalRacers)} />
        <LabeledText label="Total Finishers" text={String(finishers)} />
        <LabeledText label="Unique Nationalities" text={String(countries.length)} />
        {countries.map((country: string) => (
          <span key={country}>
            <Text span size="xs">{`${country}, `}</Text>
          </span>
        ))}
      </Container>
    </InfoBlock>
  );
}
