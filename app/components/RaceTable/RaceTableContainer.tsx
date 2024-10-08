import { mockRacingHistory } from '@/app/mock-data/mock';
import RaceTabs from './RaceTabs';
import { IRaceYear } from '@/app/types';

const sortRacingData = (history: IRaceYear[]): IRaceYear[] => {
  const sorted = [...history];
  sorted.sort((a, b) => b.year - a.year);
  return sorted;
}

const sleep = (ms: number) => new Promise(
  resolve => setTimeout(resolve, ms)
)

const getData = async (history: IRaceYear[]): Promise<IRaceYear[]> => {
  // simulate a 300ms server side network request
  return sleep(300).then(() => sortRacingData(history))
}

export default async function RaceTableContainer() {
  const raceHistory: any = await getData(mockRacingHistory.history);

  return (
    <>
      <RaceTabs years={raceHistory.map((x: any) => String(x.year))} history={raceHistory} />
    </>
  );
}