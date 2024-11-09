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

const getListOfResultsPreviews = (results: ResultsList[]) =>
  results.map((result, index) => (
    <div key={`result-${index}`}>
      <ResultPreview raceResults={result} />
    </div>
  ));

export default function ResultPreviewList({ races }: ResultPreviewListProps) {
  const [raceResults, setRaceResults] = React.useState<ResultsList[]>([]);
  const [errors, setErrors] = React.useState<string[]>([]);

  React.useEffect(() => {
    const fetchTopResults = async () => {
      const NUMBER_OF_RESULTS = 10;
      const fetchedResults: RiderResult[][] = [];
      const errorMessages: string[] = [];

      await Promise.all(
        races.map(async (race) => {
          try {
            const response = await getRecentRaceResults(race.id);

            if (response?.error) {
              errorMessages.push(`Error getting results for race with id: ${race.id}`);
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
          } catch (error) {
            errorMessages.push(`Unknown Error for race ${race.id}: ${String(error)}`);
          }
        })
      );

      setRaceResults(fetchedResults);
      setErrors(errorMessages); // Set any accumulated error messages in state
    };

    fetchTopResults();
  }, [races]);

  return (
    <Container className={classes.resultsPreviewContainer}>
      {errors.length > 0 && (
        <div data-testid="error-messages">
          {errors.map((error, index) => (
            <div key={`error-${index}`} style={{ color: 'red' }}>
              {error}
            </div>
          ))}
        </div>
      )}
      <SectionLabel text="Recent Results" />
      {getListOfResultsPreviews(raceResults)}
    </Container>
  );
}
