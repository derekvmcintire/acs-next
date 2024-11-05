import { mockRider } from '@/src/_db/mock-data/mock-racer';
import { AgeGroup, Team } from '@/src/_types/base-types';
import { RiderResult, YearlyResults } from '@/src/_types/extended-types';
import {
  ACS_COLOR_BRONZE,
  ACS_COLOR_DARK_GOLD,
  ACS_COLOR_DARK_SILVER,
  ACS_COLOR_LIGHT_GOLD,
  ACS_COLOR_LIGHT_SILVER,
  GF_AGE_GROUPS,
  LIGHT_COLOR_SCHEME,
} from '@/src/global-constants';

export const getMockRiderInfo = () => mockRider;

export const getCurrentTeam = (teams: Team[]): string => {
  if (!teams || teams?.length < 1) {
    return '';
  }
  const sortedTeams = teams.sort((a, b) => b.year - a.year);
  return sortedTeams[0].name;
};

export const calculateAge = (dob: Date) => {
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  return age;
};

export const getGFAgeGroup = (age: number): AgeGroup => {
  return GF_AGE_GROUPS.reduce((acc: AgeGroup, group: AgeGroup) => {
    const { start, end } = group;
    if (age >= start && age <= end) {
      return group;
    }
    return acc;
  }, GF_AGE_GROUPS[0]);
};

export const calculateAgeGroupFromDob = (dob: string): AgeGroup => {
  const birthDate = new Date(dob);
  const age = calculateAge(birthDate);
  return getGFAgeGroup(age);
};

export const getTopResultPlaceColor = (place: number, colorScheme: string) => {
  switch (place) {
    case 1:
      return colorScheme === LIGHT_COLOR_SCHEME ? ACS_COLOR_DARK_GOLD : ACS_COLOR_LIGHT_GOLD;
    case 2:
      return colorScheme === LIGHT_COLOR_SCHEME ? ACS_COLOR_DARK_SILVER : ACS_COLOR_LIGHT_SILVER;
    case 3:
      return ACS_COLOR_BRONZE;
    default:
      return '';
  }
};

/********************** */
const _sortResultsByYear = (results: RiderResult[]) =>
  results.sort(
    (x, y) => new Date(String(y.startDate)).getTime() - new Date(String(x.startDate)).getTime()
  );

/********************** */
const _sortHistoryByYear = (history: YearlyResults[]): YearlyResults[] =>
  history.sort((a, b) => b.year - a.year);

/********************** */
export const sortRacingDataByYear = (history: YearlyResults[]): YearlyResults[] => {
  return _sortHistoryByYear(history).map((year) => ({
    ...year,
    races: _sortResultsByYear(year.races),
  }));
};

/********************** */
export const getRaceYears = (raceHistory: YearlyResults[]): number[] =>
  raceHistory.length < 1 ? [] : raceHistory.map((raceYear: YearlyResults) => raceYear.year);

/********************** */
export const getOrdinal = (n: number) => {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const value = n % 100;

  return n + (suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0]);
};

/********************** */
export const consolidateResults = (history: YearlyResults[]): RiderResult[] => {
  if (history.length < 1) {
    return [];
  }
  return history.reduce((acc: RiderResult[], year: YearlyResults) => {
    const racesWithPlaces = year.races.filter((race) => race.place > 0);
    return [...acc, ...racesWithPlaces];
  }, []);
};

/********************** */
export const getTopTenResults = (history: YearlyResults[] = []): RiderResult[] => {
  const reducedResults: RiderResult[] = consolidateResults(history);
  return reducedResults.sort((a, b) => a.place - b.place).slice(0, 8);
};

/********************** */
export const getCareerWins = (history: YearlyResults[] = []): number => {
  const reducedResults: RiderResult[] = consolidateResults(history);
  return reducedResults.filter((r: RiderResult) => r.place === 1).length;
};

/********************** */
export const getResultsForSingleYear = (year: number, history: YearlyResults[]) =>
  history.find((raceYear) => raceYear.year === year)?.races || [];
