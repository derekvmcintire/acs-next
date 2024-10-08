import { getCurrentTeam, getMockRiderInfo } from "../utils";
import { TEAM_B2C2_CONTES } from "@/app/mock-data/mock";

describe('getCurrentTeam', () => {
    test('returns the current team', () => {
     const mockRider = getMockRiderInfo();
     const expectedResult = TEAM_B2C2_CONTES;
     const result = getCurrentTeam(mockRider.teams);
     expect(result).toEqual(expectedResult);
    });
  });