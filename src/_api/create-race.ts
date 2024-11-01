import { API_BASE_URL, API_RACE_PATH } from '@/src/_api/constants';
import { postResponse } from './helpers';

export const createRaceRequestUrl = () => `${API_BASE_URL}${API_RACE_PATH}`;

interface CreateRaceData {
  name: string;
  raceTypeId: number;
  startDate: string;
  endDate: string;
  location: string;
}

export const createRace = async (raceData: CreateRaceData) => {
  const result = await postResponse(
    createRaceRequestUrl(),
    async (response: Response): Promise<any> => {
      const parsedResponse: any = await response.json();
      return { riderInfo: parsedResponse };
    },
    JSON.stringify(raceData)
  );
  return result;
};
