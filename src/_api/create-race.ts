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

export interface CreateRaceReturnData {
  id: number;
  eventId: number;
  raceTypeId: number;
  startDate: string;
  endDate: string | null;
  location: string | null;
}

export const createRace = async (raceData: CreateRaceData) => {
  const result = await postResponse(
    createRaceRequestUrl(),
    async (response: Response): Promise<CreateRaceReturnData> => {
      const parsedResponse: CreateRaceReturnData = await response.json();
      return parsedResponse;
    },
    JSON.stringify(raceData)
  );
  return result;
};
