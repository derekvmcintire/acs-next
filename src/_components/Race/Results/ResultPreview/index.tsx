'use client';

import { Container, Spoiler, Text } from '@mantine/core';
import dayjs from 'dayjs';
import React from 'react';
import LabeledText from '@/src/_components/ui/LabeledText';
import { RiderResult } from '@/src/_types/extended-types';
import classes from '../../styles/race-results.module.css';

interface ResultPreviewProps {
  raceResults: RiderResult[];
}

export default function ResultPreview({ raceResults }: ResultPreviewProps) {
  const firstResult = raceResults[0];
  raceResults.shift();
  const { name, startDate, rider, location } = firstResult;
  const winnerName = `${rider?.firstName} ${rider?.lastName}`;

  return (
    <Container className={classes.resultsPreview}>
      <LabeledText isSpan label={dayjs(startDate).format('M/D')} text={name} />
      <Text fs="italic" span>{` - ${location}`}</Text>
      <Spoiler maxHeight={5} showLabel="Show Results" hideLabel="Hide Results">
        <LabeledText color="orange" label="Winner" text={winnerName} />
        {raceResults.map((result: RiderResult, i) => {
          const riderResult = result.rider;
          const riderName = `${riderResult?.firstName} ${riderResult?.lastName}`;
          return <LabeledText hasColon={false} label={`${i + 2}.`} text={riderName} />;
        })}
      </Spoiler>
    </Container>
  );
}
