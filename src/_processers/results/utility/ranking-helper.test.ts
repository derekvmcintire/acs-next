import { calculatePoints, MAX_POINTS } from './ranking-helper';

describe('calculatePoints', () => {
  test('should award maximum points for 1st place', () => {
    expect(calculatePoints(100, 1)).toBe(140); // Expect winner to get a reasonable number, close to 100 for 100 racers
    expect(calculatePoints(1000, 1)).toBe(200); // Expect winner to get max points for 1000 racers
  });

  test('should award points for a middle position within the top 20%', () => {
    expect(calculatePoints(620, 12)).toBeGreaterThan(0);
    expect(calculatePoints(620, 12)).toBeLessThan(MAX_POINTS);
  });

  test('should award minimum points for the last position within the top 20%', () => {
    const totalRacers = 620;
    const lastTop20PercentPosition = Math.ceil(totalRacers * 0.2);
    expect(calculatePoints(totalRacers, lastTop20PercentPosition)).toBe(10); // Should get min points
  });

  test('should award 0 points for positions outside the top 20%', () => {
    const totalRacers = 620;
    const positionOutsideTop20Percent = Math.ceil(totalRacers * 0.2) + 1;
    expect(calculatePoints(totalRacers, positionOutsideTop20Percent)).toBe(0);
  });

  test('should throw an error for invalid position less than 1', () => {
    expect(() => calculatePoints(100, 0)).toThrow(
      'Position must be between 1 and the total number of racers.'
    );
  });

  test('should throw an error for position greater than total racers', () => {
    expect(() => calculatePoints(100, 101)).toThrow(
      'Position must be between 1 and the total number of racers.'
    );
  });
});
