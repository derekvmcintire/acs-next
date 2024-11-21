'use client';

import React from 'react';
import dayjs from 'dayjs';
import { useQuery } from '@tanstack/react-query';
import {
  GetRacesTotalsResponse,
  GetTotalsFilters,
} from '@/src/_api/get/races/fetch-races-response-type';
import { fetchRacesTotals } from '@/src/_api/get/races/fetch-races-totals';
import { DEFAULT_DATE_FORMAT } from '@/src/global-constants';
import { MonthlyRaceData } from './results-report-types';
import ResultsReportChart from './ResultsReportChart';

export default function ResultsReport() {
  const [chartData, setChartData] = React.useState<MonthlyRaceData[]>([]);
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  const filters: GetTotalsFilters = {
    startDateRange: {
      from: dayjs().subtract(5, 'month').format(DEFAULT_DATE_FORMAT),
      to: dayjs().format(DEFAULT_DATE_FORMAT),
    },
    groupBy: 'month',
  };

  const {
    data: getTotalsResponse,
    isError,
    error,
  } = useQuery({
    queryKey: ['getTotals', filters],
    queryFn: () => fetchRacesTotals(filters),
    staleTime: 5 * 60 * 1000, // caches data from requests for 5 minutes
  });

  React.useEffect(() => {
    if (isError && error instanceof Error) {
      setErrorMessage(error.message);
    } else {
      setErrorMessage('');
    }

    const hasTotals = getTotalsResponse?.totals && getTotalsResponse.totals.length > 0;

    if (hasTotals) {
      const { totals } = getTotalsResponse;
      setChartData(
        totals.map((monthlyTotal: GetRacesTotalsResponse) => {
          return {
            name: dayjs(monthlyTotal.startDate).format('MMM') || '',
            numberOfRaces: monthlyTotal.totalRaces || 0,
            numberOfRiders: monthlyTotal.totalRiders || 0,
          };
        })
      );
    }
  }, [isError, error, getTotalsResponse]);

  return (
    <>
      {errorMessage ? (
        <div>Something went wront, unable to load data</div>
      ) : (
        <ResultsReportChart chartData={chartData} />
      )}
    </>
  );
}
