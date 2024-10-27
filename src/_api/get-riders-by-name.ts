import { API_BASE_URL, API_RIDER_PATH } from '@/src/_api/constants';
import { IRiderInfo } from '@/src/_types';
import { getResponse } from './helpers';
import { IGetRidersResponse } from './types';

export const getSingleRiderRequestUrl = (name: string) =>
  `${API_BASE_URL}${API_RIDER_PATH}?name=${name}`;

export const getRidersByName = async (name: string) => {
  const result = await getResponse(
    getSingleRiderRequestUrl(name),
    async (response: Response): Promise<IGetRidersResponse> => {
      const parsedResponse: IRiderInfo = await response.json();
      return { riders: parsedResponse };
    }
  );
  return result;
};
