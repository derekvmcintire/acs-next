import { IRaceYear } from '@/app/types';

export const sortRacingData = (history: IRaceYear[]): IRaceYear[] => {
  const sorted = [...history];
  sorted.sort((a, b) => b.year - a.year);
  return sorted;
};

export async function sleepTimeout(resolve: Function) {
  setTimeout(resolve, 300);
}

export async function sleep() {
  await new Promise(sleepTimeout);
}

export const  getData = async (history: IRaceYear[]): Promise<IRaceYear[]> =>
  sleep().then(() => sortRacingData(history));

export const getRaceYears = (raceHistory: IRaceYear[]): string[] => raceHistory.map((raceYear: IRaceYear) => String(raceYear.year));
