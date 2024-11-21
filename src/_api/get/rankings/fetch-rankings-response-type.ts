export interface GetRankingsResponse {
  totalPoints: number;
  riderId: number;
  firstName: string;
  lastName: string;
  hometown: string;
  country: string;
}

export const mockRankingsResponse: GetRankingsResponse = {
  totalPoints: 899,
  riderId: 23,
  firstName: 'Zoea',
  lastName: 'Swiftbottom',
  hometown: 'Oslo',
  country: 'Paraguay',
};
