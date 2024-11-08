'use client';

import { Container } from '@mantine/core';
import React from 'react';
import { GetRacesResponse } from '@/src/_api/get/races/get-races-response-type';
import { getRecentRaceResults } from '@/src/_api/get/results/get-race-results';
import { GetRaceResultsResponse } from '@/src/_api/get/results/get-race-results-response-type';
import { RiderResult } from '@/src/_types/extended-types';
import SectionLabel from '../../ui/SectionLabel';
import ResultPreview from '../Results/ResultPreview';
import classes from '../styles/race-results.module.css';

interface ResultPreviewListProps {
  races: GetRacesResponse[];
}

type ResultsList = RiderResult[];

export default function ResultPreviewList({ races }: ResultPreviewListProps) {
  const [raceResults, setRaceResults] = React.useState<ResultsList[]>([]);
  const [errors, setErrors] = React.useState<string[]>([]);

  React.useEffect(() => {
    const getTopResults = async () => {
      const NUMBER_OF_RESULTS = 10;
      try {
        const topResultsResponses: RiderResult[][] = await Promise.all(
          races.map(async (race: GetRacesResponse) => {
            const response = await getRecentRaceResults(race.id);

            if (response && response?.error) {
              throw new Error('YOU GOT AN ERROR');
            }

            const results = response.results || [];
            const racers = results.length || 0;
            results.length = NUMBER_OF_RESULTS;

            return results.map((result: GetRaceResultsResponse) => {
              return {
                place: result.place,
                points: result.points,
                name: race.event.name,
                racers, // @TODO numberOfRacers is probably better than "racers" here
                type: result.resultType.name,
                startDate: race.startDate,
                location: race.location,
                rider: result.rider,
              };
            });
          })
        );

        setRaceResults(topResultsResponses);
      } catch (error) {
        setErrors((prev) => [...prev, String(error)]);
      }
    };

    getTopResults();
  }, [races]);

  return (
    <Container className={classes.resultsPreviewContainer}>
      {errors && errors.map((error: string) => <div>{`${error}`}</div>)}
      <SectionLabel text="Recent Results" />
      {raceResults &&
        raceResults.map((result: RiderResult[]) => (
          <ResultPreview raceResults={result} />
        ))}
    </Container>
  );
}
