import { API_BASE_URL, API_RACE_PATH } from '@/src/_api/constants';
import { IRiderInfo } from '@/src/_types';
import { getResponse } from './helpers';
import { IGetRacesByNameResonse } from './types';

export const getRacesByNameRequestUrl = (name: string) =>
  `${API_BASE_URL}${API_RACE_PATH}?name=${name}`;

export const getRacesByName = async (name: string) => {
  const result = await getResponse(
    getRacesByNameRequestUrl(name),
    async (response: Response): Promise<IGetRacesByNameResonse> => {
      const parsedResponse: IRiderInfo = await response.json();
      return { races: parsedResponse };
    }
  );

  return result;
};
