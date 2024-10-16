import { BASE_URL, RACERS_PATH } from '@/src/_db/mock-api/constants';
import { IRiderInfo } from '@/src/_types';

export const getSingleRider = async (id: number): Promise<IRiderInfo | null> => {
  try {
    const response = await fetch(`${BASE_URL}${RACERS_PATH}?id=${id}`);
    const parsedResponse: IRiderInfo[] = await response.json();
    return parsedResponse[0];
  } catch (error) {
    return null;
  }
};

export const getRidersByTeam = async (team: string): Promise<IRiderInfo[] | null> => {
  try {
    const response = await fetch(`${BASE_URL}${RACERS_PATH}?currentTeam=${team}`);
    return await response.json();
  } catch (error) {
    return null;
  }
};