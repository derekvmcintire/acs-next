import { IRaceYear } from '@/src/_types';
import { getRiderResults } from '../api/get-rider-results';
import ResultsTableTabs from '../client/ResultsTableTabs';
import { getRaceYears } from '../utils';
import classes from '../styles/results.module.css';

interface ResultsTableServerProps {
  id: number;
}

export default async function ResultsTableServer({ id }: ResultsTableServerProps) {
  const history: IRaceYear[] = await getRiderResults(id);
  const years: number[] = history?.length > 0 ? getRaceYears(history) : [];

  return (
    <div className={classes.raceTableContainer}>
      <ResultsTableTabs years={years} history={history} />
    </div>
  );
}
