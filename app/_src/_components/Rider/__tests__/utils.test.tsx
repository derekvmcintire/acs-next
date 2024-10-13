import { TEAM_B2C2_CONTES } from '@/app/_src/_db/mock-data/mock-racer';
import { getCurrentTeam, getMockRiderInfo } from '../utils';

describe('getCurrentTeam', () => {
  test('returns the current team', () => {
    const mockRider = getMockRiderInfo();
    const expectedResult = TEAM_B2C2_CONTES;
    const result = getCurrentTeam(mockRider.teams);
    expect(result).toEqual(expectedResult);
  });
});
