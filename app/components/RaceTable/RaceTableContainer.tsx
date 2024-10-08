import { mockRacingHistory } from '@/app/mock-data/mock';
import { IRaceYear } from '@/app/types';
import RaceTabs from './RaceTabs';
import classes from './RaceTable.module.css';

const sortRacingData = (history: IRaceYear[]): IRaceYear[] => {
  const sorted = [...history];
  sorted.sort((a, b) => b.year - a.year);
  return sorted;
};

async function sleepTimeout(resolve: Function) {
  setTimeout(resolve, 300);
}

async function sleep() {
  await new Promise(sleepTimeout);
}

const getData = async (history: IRaceYear[]): Promise<IRaceYear[]> =>
  sleep().then(() => sortRacingData(history));

export default async function RaceTableContainer() {
  const raceHistory: any = await getData(mockRacingHistory.history);

  return (
    <div className={classes.raceTableContainer}>
      <RaceTabs years={raceHistory.map((x: any) => String(x.year))} history={raceHistory} />
    </div>
  );
}
