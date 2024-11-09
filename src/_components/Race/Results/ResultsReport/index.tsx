'use client';

import dayjs from 'dayjs';
import React from 'react';
import { GetRacesFilters, getRecentRaces } from '@/src/_api/get/races/get-races';
import { GetRacesResponse } from '@/src/_api/get/races/get-races-response-type';
import { IGetRacesResponse } from '@/src/_api/types';
import { fetchResultsForReport } from './fetch-results-for-report';
import { MonthlyRaceData, PreliminaryRace } from './results-report-types';
import ResultsReportChart from './ResultsReportChart';
import { groupRacesByMonth } from './utility';

export default function ResultsReport() {
  const [races, setRaces] = React.useState<GetRacesResponse[]>([]);
  const [chartData, setChartData] = React.useState<MonthlyRaceData[]>([]);

  const validateRaceData = (data: (PreliminaryRace | null)[]) =>
    data.filter((result): result is PreliminaryRace => result !== null);

  React.useEffect(() => {
    const fetchResults = async () => {
      const preliminaryRaceResults: (PreliminaryRace | null)[] = await Promise.all(
        races.map(async (race: GetRacesResponse) => {
          const results = await fetchResultsForReport(race);
          return results;
        })
      );

      const validData = validateRaceData(preliminaryRaceResults);
      setChartData(groupRacesByMonth(validData));
    };

    fetchResults();
  }, [races]);

  React.useEffect(() => {
    const fetchRaces = async () => {
      const filters: GetRacesFilters = {
        dateRange: {
          from: dayjs().subtract(5, 'month').format('YYYY-MM-DD'),
          to: dayjs().format('YYYY-MM-DD'),
        },
        orderBy: 'startDate',
        direction: 'desc',
      };

      // fetch all races in last four months
      const recentRacesResponse: IGetRacesResponse = await getRecentRaces(filters);

      if (recentRacesResponse && recentRacesResponse?.races) {
        setRaces(recentRacesResponse.races);
      }
    };

    fetchRaces();
  }, []);

  return <ResultsReportChart chartData={chartData} />;
}
