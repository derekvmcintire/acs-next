import { IRaceData, IRaceYear } from '@/app/types';

const sortRacesByYear = (races: IRaceData[]) =>
  races.sort((x, y) => new Date(y.startDate).getTime() - new Date(x.startDate).getTime());

const sortHistoryByYear = (history: IRaceYear[]): IRaceYear[] =>
  history.sort((a, b) => b.year - a.year);

export const sortRacingDataByYear = (history: IRaceYear[]): IRaceYear[] => {
  return sortHistoryByYear(history).map((year) => ({
    ...year,
    races: sortRacesByYear(year.races),
  }));
};

export async function sleepTimeout(resolve: Function) {
  setTimeout(resolve, 0);
}

export async function sleep() {
  await new Promise(sleepTimeout);
}

export const getData = async (history: IRaceYear[]): Promise<IRaceYear[]> =>
  sleep().then(() => sortRacingDataByYear(history));

export const getRaceYears = (raceHistory: IRaceYear[]): number[] =>
  raceHistory.length < 1 ? [] : raceHistory.map((raceYear: IRaceYear) => raceYear.year);
