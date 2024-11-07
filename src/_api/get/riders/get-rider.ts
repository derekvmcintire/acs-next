import { API_BASE_URL, API_RIDER_PATH } from '@/src/_api/constants';
import { IGetSingleRiderResponse } from '../../types';
import { GetRiderResponse } from './get-riders-response-type';

export const getSingleRiderRequestUrl = (id: number) => `${API_BASE_URL}${API_RIDER_PATH}/${id}`;

export const getSingleRider = async (id: number): Promise<IGetSingleRiderResponse> => {
  try {
    const response = await fetch(getSingleRiderRequestUrl(id));

    if (!response.ok) {
      return { riderInfo: null, error: `Error ${response.status}: ${response.statusText}` };
    }

    const parsedResponse: GetRiderResponse = await response.json();
    return { riderInfo: parsedResponse, error: null };
  } catch (error) {
    return { riderInfo: null, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};
