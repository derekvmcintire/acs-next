import { mockRaces } from '@/src/_db/mock-data/mock-race-history';
import { mockRider } from '@/src/_db/mock-data/mock-racer';
import { IAgeGroup, IRaceYear, ITeams } from '@/src/_types';
import {
  ACS_COLOR_BRONZE,
  ACS_COLOR_DARK_GOLD,
  ACS_COLOR_LIGHT_SILVER,
} from '@/src/global-constants';
import {
  calculateAge,
  consolidateResults,
  getCareerWins,
  getCurrentTeam,
  getGFAgeGroup,
  getMockRiderInfo,
  getOrdinal,
  getRaceYears,
  getResultsForSingleYear,
  getTopResultPlaceColor,
  getTopTenResults,
  sortRacingDataByYear,
} from './index';

describe('Utility Functions', () => {
  it('getMockRiderInfo returns the mock rider', () => {
    expect(getMockRiderInfo()).toEqual(mockRider);
  });

  it('getCurrentTeam returns the current team based on year', () => {
    const teams: ITeams[] = [
      { name: 'Team A', year: 2022 },
      { name: 'Team B', year: 2023 },
    ];
    expect(getCurrentTeam(teams)).toBe('Team B');
  });

  it('calculateAge returns correct age from date of birth', () => {
    const dob = new Date('2000-01-01');
    const age = calculateAge(dob);
    expect(age).toBe(new Date().getFullYear() - 2000);
  });

  it('calculate age correctly', () => {
    const today = new Date();
    const birthDate = new Date(today.getFullYear() - 20, today.getMonth(), today.getDate());
    expect(calculateAge(birthDate)).toBe(20);
  });

  it('handle birthdays correctly', () => {
    const today = new Date();
    const birthDate = new Date(today.getFullYear() - 20, today.getMonth() + 1, today.getDate());
    expect(calculateAge(birthDate)).toBe(19);
  });

  it('getGFAgeGroup returns the correct age group', () => {
    const age = 25;
    const group: IAgeGroup = getGFAgeGroup(age);
    expect(group.start).toBeLessThanOrEqual(age);
    expect(group.end).toBeGreaterThanOrEqual(age);
  });

  it('getTopResultPlaceColor returns correct color for places', () => {
    expect(getTopResultPlaceColor(1, 'light')).toBe(ACS_COLOR_DARK_GOLD);
    expect(getTopResultPlaceColor(2, 'dark')).toBe(ACS_COLOR_LIGHT_SILVER);
    expect(getTopResultPlaceColor(3, 'light')).toBe(ACS_COLOR_BRONZE);
    expect(getTopResultPlaceColor(4, 'light')).toBe('');
  });

  it('sortRacingDataByYear sorts race years correctly', () => {
    const history: IRaceYear[] = [
      { year: 2023, races: [] },
      { year: 2022, races: [] },
    ];
    const sorted = sortRacingDataByYear(history);
    expect(sorted[0].year).toBe(2023);
  });

  it('getRaceYears returns the years from race history', () => {
    const raceHistory: IRaceYear[] = [{ year: 2023, races: [] }];
    expect(getRaceYears(raceHistory)).toEqual([2023]);
  });

  it('getOrdinal returns correct ordinal suffix', () => {
    expect(getOrdinal(1)).toBe('1st');
    expect(getOrdinal(2)).toBe('2nd');
    expect(getOrdinal(3)).toBe('3rd');
    expect(getOrdinal(4)).toBe('4th');
  });

  it('consolidateResults returns consolidated race results', () => {
    const mockResults = [
      { ...mockRaces[0], place: 1 },
      { ...mockRaces[0], place: 0 },
      { ...mockRaces[0], place: 2 },
    ];

    const history: IRaceYear[] = [
      {
        year: 2023,
        races: mockResults,
      },
    ];
    const results = consolidateResults(history);
    expect(results.length).toBe(2);
  });

  it('getTopTenResults returns top ten results', () => {
    const mockResults = [
      { ...mockRaces[0], place: 1 },
      { ...mockRaces[0], place: 3 },
      { ...mockRaces[0], place: 2 },
    ];

    const history: IRaceYear[] = [
      {
        year: 2023,
        races: mockResults,
      },
    ];
    const topResults = getTopTenResults(history);
    expect(topResults.length).toBe(3);
  });

  it('getCareerWins returns the number of wins', () => {
    const mockResults = [
      { ...mockRaces[0], place: 1 },
      { ...mockRaces[0], place: 2 },
    ];

    const history: IRaceYear[] = [
      {
        year: 2023,
        races: mockResults,
      },
    ];
    const wins = getCareerWins(history);
    expect(wins).toBe(1);
  });

  it('getResultsForSingleYear returns results for a specific year', () => {
    const mockResults = [
      { ...mockRaces[0], place: 1 },
      { ...mockRaces[0], place: 2 },
    ];

    const history: IRaceYear[] = [
      {
        year: 2023,
        races: mockResults,
      },
    ];
    const results = getResultsForSingleYear(2023, history);
    expect(results.length).toBe(2);
  });
});
