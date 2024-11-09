'use client';

import dayjs from 'dayjs';
import React from 'react';
import { GetRacesFilters, getRecentRaces } from '@/src/_api/get/races/get-races';
import { GetRacesResponse } from '@/src/_api/get/races/get-races-response-type';
import { getRecentRaceResults } from '@/src/_api/get/results/get-race-results';
import { IGetRacesResponse } from '@/src/_api/types';
import { MonthlyRaceData, TempRace } from './results-report-types';
import ResultsReportChart from './ResultsReportChart';
import { groupRacesByMonth } from './utility';

export default function ResultsReport() {
  const [races, setRaces] = React.useState<GetRacesResponse[]>([]);
  const [allRaceData, setAllRaceData] = React.useState<any[]>([]);
  const [chartData, setChartData] = React.useState<MonthlyRaceData[]>([]);

  React.useEffect(() => {
    setChartData(groupRacesByMonth(allRaceData));
  }, [allRaceData]);

  React.useEffect(() => {
    const getResultsForAllRaces = async () => {
      const racesWithResults: TempRace[] = await Promise.all(
        races.map(async (race: GetRacesResponse) => {
          const response = await getRecentRaceResults(race.id);

          if (response && response?.error) {
            throw new Error(`Error getting results for race with id: ${race.id}`);
          }

          const results = response.results || [];
          const numberOfRiders = results.length || 0;

          // Temporary data shape until we can aggregate by month
          const data: TempRace = {
            raceId: race.id,
            raceStartDate: race.startDate,
            numberOfRiders,
          };

          return data;
        })
      );

      setAllRaceData(racesWithResults);
    };

    getResultsForAllRaces();
  }, [races]);

  React.useEffect(() => {
    const getRaces = async () => {
      // build filters for getting races
      const getRecentRacesFilters: GetRacesFilters = {
        dateRange: {
          from: dayjs().subtract(5, 'month').format('YYYY-MM-DD'),
          to: dayjs().format('YYYY-MM-DD'),
        },
        orderBy: 'startDate',
        direction: 'desc',
      };

      // get all races in last four months
      const recentRacesResponse: IGetRacesResponse = await getRecentRaces(getRecentRacesFilters);

      // if we got races...
      if (recentRacesResponse && recentRacesResponse?.races) {
        setRaces(recentRacesResponse.races);
      }
    };

    getRaces();
  }, []);

  return <ResultsReportChart chartData={chartData} />;
}
