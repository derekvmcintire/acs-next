import { BASE_URL, RACERS_PATH } from '@/src/_api/constants';
import { IRiderInfo } from '@/src/_types';
import { DEFAULT_RIDER_NOT_FOUND } from '../global-constants';

export const getSingleRiderRequestUrl = (id: number) => `${BASE_URL}${RACERS_PATH}?id=${id}`;

export const getSingleRider = async (id: number): Promise<IRiderInfo> => {
  try {
    const response = await fetch(getSingleRiderRequestUrl(id));
    const parsedResponse: IRiderInfo[] = await response.json();
    return parsedResponse[0];
  } catch (error) {
    return DEFAULT_RIDER_NOT_FOUND;
  }
};

export const getRidersByTeamRequestUrl = (team: string) =>
  `${BASE_URL}${RACERS_PATH}?currentTeam=${encodeURIComponent(team)}`;

export const getRidersByTeam = async (team: string): Promise<IRiderInfo[] | null> => {
  try {
    const response = await fetch(getRidersByTeamRequestUrl(team));
    return await response.json();
  } catch (error) {
    return null;
  }
};
