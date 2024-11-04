import { API_BASE_URL, API_RACE_PATH } from '@/src/_api/constants';
import { IExistingRace } from '@/src/_types';
import { getResponse } from './helpers';
import { IGetRacesResponse } from './types';

export const getRacesByNameRequestUrl = (name: string) =>
  `${API_BASE_URL}${API_RACE_PATH}?name=${name}`;

export const getRacesByName = async (name: string) => {
  const result = await getResponse(
    getRacesByNameRequestUrl(name),
    async (response: Response): Promise<IGetRacesResponse> => {
      const parsedResponse: IExistingRace[] = await response.json();
      return { races: parsedResponse };
    }
  );

  if ('error' in result) {
    throw new Error(String(result.error));
  }

  return result;
};
