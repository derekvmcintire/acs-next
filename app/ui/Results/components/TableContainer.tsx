import { mockRacingHistory } from '@/app/mock-data/mock';
import { getData, getRaceYears } from '../utils';
import YearTabs from './YearTabs';
import classes from '../styles/RaceTable.module.css';

export default async function RaceTableContainer() {
  const raceHistory: any = await getData(mockRacingHistory.history);
  const years = getRaceYears(raceHistory);

  return (
    <div className={classes.raceTableContainer}>
      <YearTabs years={years} history={raceHistory} />
    </div>
  );
}
