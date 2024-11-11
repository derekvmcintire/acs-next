'use client';

import React from 'react';
import dayjs from 'dayjs';
import { fetchRaces, GetRacesFilters } from '@/src/_api/get/races/fetch-races';
import { GetRacesResponse } from '@/src/_api/get/races/fetch-races-response-type';
import { IGetRacesResponse } from '@/src/_api/types';
import { DEFAULT_DATE_FORMAT } from '@/src/global-constants';
import { fetchResultsForReport } from './fetch-results-for-report';
import { MonthlyRaceData, PreliminaryRace } from './results-report-types';
import ResultsReportChart from './ResultsReportChart';
import { groupRacesByMonth } from './utility';

export default function ResultsReport() {
  const [races, setRaces] = React.useState<GetRacesResponse[]>([]);
  const [chartData, setChartData] = React.useState<MonthlyRaceData[]>([]);

  const validatePreliminaryResults = (prelimResult: (PreliminaryRace | null)[]) =>
    prelimResult.filter((result): result is PreliminaryRace => result !== null);

  React.useEffect(() => {
    const fetchResults = async () => {
      const preliminaryRaceResults: (PreliminaryRace | null)[] = await Promise.all(
        races.map(async (race: GetRacesResponse) => {
          const results = await fetchResultsForReport(race);
          return results;
        })
      );

      const validatedResults = validatePreliminaryResults(preliminaryRaceResults);
      setChartData(groupRacesByMonth(validatedResults));
    };

    fetchResults();
  }, [races]);

  React.useEffect(() => {
    const fetchRecentRaces = async () => {
      const filters: GetRacesFilters = {
        dateRange: {
          from: dayjs().subtract(5, 'month').format(DEFAULT_DATE_FORMAT),
          to: dayjs().format(DEFAULT_DATE_FORMAT),
        },
        orderBy: 'startDate',
        direction: 'desc',
      };

      const fetchRacesResponse: IGetRacesResponse = await fetchRaces(filters);

      if (fetchRacesResponse && fetchRacesResponse?.races) {
        setRaces(fetchRacesResponse.races);
      }
    };

    fetchRecentRaces();
  }, []);

  return <ResultsReportChart chartData={chartData} />;
}
