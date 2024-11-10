'use client';

import { Anchor, Container, Spoiler, Text } from '@mantine/core';
import dayjs from 'dayjs';
import React from 'react';
import LabeledText from '@/src/_components/ui/LabeledText';
import { RiderResult } from '@/src/_types/extended-types';
import { APP_RACE_PATH } from '@/src/global-constants';
import RemainingTopTen from './RemainingTopTen';
import classes from '../../styles/race-results.module.css';

interface ResultPreviewProps {
  raceResults: RiderResult[];
}

export default function ResultPreview({ raceResults }: ResultPreviewProps) {
  if (raceResults.length === 0) return null;

  const [firstResult, ...remainingResults] = raceResults;
  const { name, startDate, rider, location } = firstResult;
  const winnerName = rider ? `${rider?.firstName} ${rider?.lastName}` : 'Unknown Rider';

  return (
    <Container className={classes.resultsPreview}>
      <Anchor className={classes.resultPreviewAnchor} href={`${APP_RACE_PATH}/${firstResult?.eventId || 0}`}>
        <LabeledText isSpan label={dayjs(startDate).format('M/D')} text={name} />
        <Text fs="italic" span>{` - ${location}`}</Text>
      </Anchor>
      <Spoiler
        maxHeight={5}
        showLabel="Show Top Ten"
        hideLabel="Hide Top Ten"
        aria-expanded={false}
      >
        <LabeledText color="orange" label="Winner" text={winnerName} />
        <RemainingTopTen results={remainingResults} />
      </Spoiler>
    </Container>
  );
}
