import { getFormattedMonthDayDateString, getFormattedYearString } from './date-helpers';

describe('getFormattedMonthDayDateString', () => {
  it('should return the correct formatted month/day string for a valid date', () => {
    const date = new Date('2024-10-20T00:00:00.000-05:00');
    expect(getFormattedMonthDayDateString(date)).toBe('10/20');
  });

  it('should handle single-digit months and days correctly', () => {
    const date = new Date('2024-01-05T00:00:00.000-05:00');
    expect(getFormattedMonthDayDateString(date)).toBe('1/5');
  });

  it('should handle December 31st correctly', () => {
    const date = new Date('2024-12-31T00:00:00.000-05:00');
    expect(getFormattedMonthDayDateString(date)).toBe('12/31');
  });
});

describe('getFormattedYearString', () => {
  it('should return the correct formatted year string for a valid date', () => {
    const date = new Date('2024-10-20T00:00:00.000-05:00');
    expect(getFormattedYearString(date)).toBe('2024');
  });
});
