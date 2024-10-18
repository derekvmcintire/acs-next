import { Suspense } from 'react';
import { IRaceYear } from '@/src/_types';
import Loader from '@/src/app/loading';
import ResultsTableTabs from '../client/ResultsTableTabs';
import { getRaceYears, sortRacingDataByYear } from '../utils';
import classes from '../styles/results.module.css';

interface ResultsTableServerProps {
  history: IRaceYear[];
}

export default function ResultsTableServer({ history }: ResultsTableServerProps) {
  const years: number[] = history?.length > 0 ? getRaceYears(history) : [];

  return (
    <div className={classes.raceTableContainer} data-testid="results-table-server">
      <Suspense fallback={<Loader />}>
        <ResultsTableTabs years={years} history={sortRacingDataByYear(history)} />
      </Suspense>
    </div>
  );
}
