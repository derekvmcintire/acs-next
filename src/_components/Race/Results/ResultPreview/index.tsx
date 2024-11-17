'use client';

import React from 'react';
import { Anchor, Container, Skeleton, Spoiler, Text } from '@mantine/core';
import dayjs from 'dayjs';
import { GetRecentRaceResultsResponse } from '@/src/_api/get/races/fetch-races-response-type';
import { GetRaceResultsResponse } from '@/src/_api/get/results/fetch-race-results-response-type';
import LabeledText from '@/src/_components/ui/LabeledText';
import { APP_RACE_PATH } from '@/src/global-constants';
import RemainingTopTen from './RemainingTopTen';
import classes from '../../styles/race-results.module.css';

interface ResultPreviewProps {
  raceResults: GetRecentRaceResultsResponse;
}

export default function ResultPreview({ raceResults }: ResultPreviewProps) {
  if (!raceResults || !raceResults.results || raceResults.results.length === 0) return null;

  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [eventName, setEventName] = React.useState<string>('');
  const [startDate, setStartDate] = React.useState<string>('');
  const [location, setLocation] = React.useState<string>('');
  const [winnerName, setWinnerName] = React.useState<string>('');
  const [spoilerOpened, setSpoilerOpened] = React.useState(false);
  const [firstResult, setFirstResult] = React.useState<GetRaceResultsResponse | undefined>(
    undefined
  );
  const [remainingTopTenResults, setRemainingTopTenResults] = React.useState<
    GetRaceResultsResponse[]
  >([]);

  React.useEffect(() => {
    if (raceResults?.results) {
      const { results } = raceResults;
      const [first, ...remainingResults] = results;
      const { rider, event } = first;
      const raceInfo = event.Race[0];
      setFirstResult(first);
      setRemainingTopTenResults(remainingResults.slice(0, 9));
      setEventName(event.name);
      setStartDate(raceInfo.startDate);
      setLocation(raceInfo?.location || '');
      setWinnerName(rider ? `${rider?.firstName} ${rider?.lastName}` : 'Unknown Rider');
      setIsLoading(false); // Once data is ready, set loading to false
    }
  }, [raceResults]);

  return isLoading ? (
    <div>
      <Skeleton mb={8} h={78} w="100%" radius="xs" />
    </div>
  ) : (
    <Container className={classes.resultsPreview}>
      <Anchor
        className={classes.resultPreviewAnchor}
        href={`${APP_RACE_PATH}/${firstResult?.eventId || 0}`}
      >
        <LabeledText isSpan label={dayjs(startDate).format('M/D')} text={eventName} />
        <Text fs="italic" span>{` - ${location}`}</Text>
      </Anchor>
      <Spoiler
        maxHeight={5}
        showLabel="Show Top Ten"
        hideLabel="Hide Top Ten"
        aria-expanded={spoilerOpened}
        onClick={() => setSpoilerOpened(!spoilerOpened)}
        pt={8}
      >
        <LabeledText color="orange" label="Winner" text={winnerName} />
        <RemainingTopTen results={remainingTopTenResults} />
      </Spoiler>
    </Container>
  );
}
