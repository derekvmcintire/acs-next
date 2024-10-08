import { mockRacingHistory } from '@/app/mock-data/mock';
import { getData } from '../utils';
import RaceTabs from './RaceTabs';
import classes from '../styles/RaceTable.module.css';

export default async function RaceTableContainer() {
  const raceHistory: any = await getData(mockRacingHistory.history);

  return (
    <div className={classes.raceTableContainer}>
      <RaceTabs years={raceHistory.map((x: any) => String(x.year))} history={raceHistory} />
    </div>
  );
}
