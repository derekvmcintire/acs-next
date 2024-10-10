import { IRaceYear } from '@/app/types';

export const sortRacingData = (history: IRaceYear[]): IRaceYear[] => {
  const sorted = [...history];
  sorted.sort((a, b) => b.year - a.year);
  console.log('sorted');
  return sorted;
};

export async function sleepTimeout(resolve: Function) {
  setTimeout(resolve, 1000);
}

export async function sleep() {
  await new Promise(sleepTimeout);
}

export const getData = async (history: IRaceYear[]): Promise<IRaceYear[]> =>
  sleep().then(() => sortRacingData(history));

export const getRaceYears = (raceHistory: IRaceYear[]): number[] =>
  raceHistory.length < 0 ? [] : raceHistory.map((raceYear: IRaceYear) => raceYear.year);
