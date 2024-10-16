import {
  FIRST_NAME_IN_ORDER,
  FIRST_NAME_OUT_OF_ORDER,
  mockRacingHistory,
} from '@/src/_db/mock-data/mock-race-history';
import { sortRacingDataByYear } from '../utils';

const raceYears = mockRacingHistory.results;

describe('Results Utilities', () => {
  it('race years should start out of order', () => {
    expect(raceYears[0].year).toEqual(2024);
    expect(raceYears[1].year).toBe(2022);
    expect(raceYears[2].year).toBe(2023);
    expect(raceYears[0].races[0].name).toBe(FIRST_NAME_OUT_OF_ORDER);
  });

  it('sortRacingDataByYear, sorts years in descending order', () => {
    const sortedYears = sortRacingDataByYear(raceYears);

    expect(sortedYears[0].year).toBe(2024);
    expect(sortedYears[1].year).toBe(2023);
    expect(sortedYears[2].year).toBe(2022);
    expect(raceYears[0].races[0].name).toBe(FIRST_NAME_IN_ORDER);
  });
});
