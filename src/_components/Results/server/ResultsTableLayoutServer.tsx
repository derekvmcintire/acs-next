import { Suspense } from 'react';
import { IRaceYear } from '@/src/_types';
import Loader from '@/src/app/loading';
import ResultsTableTabs from '../client/ResultsTableTabs';
import { getRaceYears, sortRacingDataByYear } from '../utils';
import classes from '../styles/results.module.css';

export const RESULTS_TABLE_LAYOUT_TEST_ID = 'results-table-layout';

interface ResultsTableLayoutServerProps {
  history: IRaceYear[];
}

export default function ResultsTableLayoutServer({ history }: ResultsTableLayoutServerProps) {
  const years: number[] = history?.length > 0 ? getRaceYears(history) : [];

  return (
    <section className={classes.raceTableContainer} data-testid={RESULTS_TABLE_LAYOUT_TEST_ID}>
      <Suspense fallback={<Loader />}>
        <ResultsTableTabs years={years} history={sortRacingDataByYear(history)} />
      </Suspense>
    </section>
  );
}
