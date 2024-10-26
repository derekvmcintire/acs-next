import { API_BASE_URL, API_RIDER_PATH } from '@/src/_api/constants';
import { IRiderInfo } from '@/src/_types';
import { getResponse } from './helpers';
import { IGetSingleRiderResponse } from './types';

export const getSingleRiderRequestUrl = (id: number) => `${API_BASE_URL}${API_RIDER_PATH}/${id}`;

export const getSingleRider = async (id: number) => {
  const result = await getResponse(
    getSingleRiderRequestUrl(id),
    async (response: Response): Promise<IGetSingleRiderResponse> => {
      const parsedResponse: IRiderInfo = await response.json();
      return { riderInfo: parsedResponse };
    }
  );
  return result;
};
