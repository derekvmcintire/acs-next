import { Suspense } from 'react';
import { getRiderHistory } from '@/src/_api/get-history';
import { IRaceYear } from '@/src/_types';
import Loader from '@/src/app/loading';
import ResultsTableTabs from '../client/ResultsTableTabs';
import { getRaceYears, sortRacingDataByYear } from '../utils';
import classes from '../styles/results.module.css';

interface ResultsTableServerProps {
  id: number;
}

export default async function ResultsTableServer({ id }: ResultsTableServerProps) {
  const history: IRaceYear[] = await getRiderHistory(id);
  const years: number[] = history?.length > 0 ? getRaceYears(history) : [];

  return (
    <div className={classes.raceTableContainer}>
      <Suspense fallback={<Loader />}>
        <ResultsTableTabs years={years} history={sortRacingDataByYear(history)} />
      </Suspense>
    </div>
  );
}
