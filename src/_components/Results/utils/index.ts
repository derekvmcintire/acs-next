import { IRaceData, IRaceYear } from '@/src/_types';

/********************** */
const _sortRacesByYear = (races: IRaceData[]) =>
  races.sort((x, y) => new Date(y.startDate).getTime() - new Date(x.startDate).getTime());

/********************** */
const _sortHistoryByYear = (history: IRaceYear[]): IRaceYear[] =>
  history.sort((a, b) => b.year - a.year);

/********************** */
export const sortRacingDataByYear = (history: IRaceYear[]): IRaceYear[] => {
  return _sortHistoryByYear(history).map((year) => ({
    ...year,
    races: _sortRacesByYear(year.races),
  }));
};

/********************** */
export const getRaceYears = (raceHistory: IRaceYear[]): number[] =>
  raceHistory.length < 1 ? [] : raceHistory.map((raceYear: IRaceYear) => raceYear.year);

/********************** */
export const getOrdinal = (n: number) => {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const value = n % 100;

  return n + (suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0]);
};

/********************** */
export const getTopTenResults = (history: IRaceYear[] = []) => {
  if (history.length < 1) {
    return [];
  }
  const reducedResults: IRaceData[] = history.reduce((acc: IRaceData[], year: IRaceYear) => {
    const racesWithPlaces = year.races.filter((race) => race.place > 0);
    return [...acc, ...racesWithPlaces];
  }, []);

  const sortedReducedResults = reducedResults.sort((a, b) => a.place - b.place);

  return sortedReducedResults.slice(0, 8);
};
