'use client';

import React from 'react';
import { Alert, Container } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import { GetRacesResponse } from '@/src/_api/get/races/fetch-races-response-type';
import { fetchRaceResults } from '@/src/_api/get/results/fetch-race-results';
import { GetRaceResultsResponse } from '@/src/_api/get/results/fetch-race-results-response-type';
import { RiderResult } from '@/src/_types/extended-types';
import SectionLabel from '../../ui/SectionLabel';
import ResultsPreviewList, { ResultsList } from './ResultsPreviewsList';
import classes from '../styles/race-results.module.css';

interface ResultPreviewListProps {
  races: GetRacesResponse[];
}

const RECENT_RACES_ERROR_TEST_ID = 'recent-races-error';

const icon = <IconInfoCircle />;

export default function RecentRaces({ races }: ResultPreviewListProps) {
  const [raceResults, setRaceResults] = React.useState<ResultsList[]>([]);
  const [error, setError] = React.useState<string>('');

  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchTopResults = async () => {
      const NUMBER_OF_RESULTS = 10;
      const fetchedResults: RiderResult[][] = [];
      const errorIds: number[] = [];

      await Promise.all(
        races.map(async (race) => {
          try {
            const response = await fetchRaceResults(race.id);

            if (response?.error) {
              errorIds.push(race.id);
              return; // Skip to the next race if there’s an error
            }

            const results = (response.results || []).slice(0, NUMBER_OF_RESULTS);
            const racers = results.length;

            fetchedResults.push(
              results.map((result: GetRaceResultsResponse) => ({
                place: result.place,
                points: result.points,
                name: race.event.name,
                racers,
                type: result.resultType.name,
                startDate: race.startDate,
                location: race.location,
                rider: result.rider,
              }))
            );
          } catch {
            errorIds.push(race.id);
          }
        })
      ).finally(async () => {
        setIsLoading(false);
      });

      setRaceResults(fetchedResults);
      setError(`Error fetching race results for id(s): ${errorIds.join(', ')}`);
    };

    fetchTopResults();
  }, [races]);

  return (
    <Container className={classes.resultsPreviewContainer}>
      <SectionLabel text="Recent Results" />
      {error && (
        <div data-testid={RECENT_RACES_ERROR_TEST_ID}>
          <Alert mb={16} variant="outline" color="red" title="Error Getting Races" icon={icon}>
            {error}
          </Alert>
        </div>
      )}
      <ResultsPreviewList results={raceResults} isLoading={isLoading} />
    </Container>
  );
}
