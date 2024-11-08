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

interface RecentRacesProps {
  races: GetRacesResponse[];
}
export default function RecentRaces({ races }: RecentRacesProps) {
  const [recentTopFives, setRecentTopFives] = React.useState<RiderResult[][]>([]);
  const [errors, setErrors] = React.useState<string[]>([]);

  React.useEffect(() => {
    const getRacesResults = async () => {
      try {
        const topFiveResults: RiderResult[][] = await Promise.all(
          races.map(async (race: GetRacesResponse) => {
            const response = await getRecentRaceResults(race.id);

            if (response && response?.error) {
              throw new Error('YOU GOT AN ERROR');
            }

            const results = response.results || [];
            const racers = results.length || 0;
            results.length = 10;

            const topFive = results.map((result: GetRaceResultsResponse) => {
              return {
                place: result.place,
                points: result.points,
                name: race.event.name,
                racers,
                type: result.resultType.name,
                startDate: race.startDate,
                location: race.location,
                rider: result.rider,
              };
            });

            return topFive;
          })
        );

        setRecentTopFives(topFiveResults);
      } catch (error) {
        setErrors((prev) => [...prev, String(error)]);
      }
    };

    getRacesResults();
  }, [races]);

  return (
    <Container className={classes.resultsPreviewContainer}>
      {errors && errors.map((error: string) => <div>{`${error}`}</div>)}
      <SectionLabel text="Recent Results" />
      {recentTopFives &&
        recentTopFives.map((raceResults: RiderResult[]) => (
          <ResultPreview raceResults={raceResults} />
        ))}
    </Container>
  );
}
