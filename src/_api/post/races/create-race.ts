import { API_BASE_URL, API_RACES_PATH } from '@/src/_api/constants';
import { GetRacesResponse } from '../../get/races/fetch-races-response-type';
import { postResponse } from '../../helpers';
import { CreateRaceRequest } from './create-race-request-type';

export const createRaceRequestUrl = () => `${API_BASE_URL}${API_RACES_PATH}`;

export const createRace = async (raceData: CreateRaceRequest) => {
  const result = await postResponse(
    createRaceRequestUrl(),
    async (response: Response): Promise<GetRacesResponse> => {
      const parsedResponse: GetRacesResponse = await response.json();
      return parsedResponse;
    },
    JSON.stringify(raceData)
  );
  return result;
};
