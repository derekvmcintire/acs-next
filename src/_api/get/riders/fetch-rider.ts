import { QueryParams, simple } from 'simple-fetch-ts';
import { API_BASE_URL, API_RIDER_PATH } from '@/src/_api/constants';
import { IGetRidersResponse, IGetSingleRiderResponse } from '../../types';
import { GetRiderResponse } from './fetch-riders-response-type';

export interface GetRidersFilters {
  name?: string;
  team?: string;
  country?: string;
}

// URLs exported for use in tests
export const getSingleRiderRequestUrl = (id: number) => `${API_BASE_URL}${API_RIDER_PATH}/${id}`;
export const ridersRequestUrl = `${API_BASE_URL}${API_RIDER_PATH}`;

export const fetchListOfRiders = async (filters: GetRidersFilters): Promise<IGetRidersResponse> => {
  const params = filters as QueryParams;
  const response = await simple(ridersRequestUrl).params(params).fetch<GetRiderResponse[]>();
  return { riders: response.data };
};

export const fetchSingleRider = async (id: number): Promise<IGetSingleRiderResponse> => {
  const response = await simple(getSingleRiderRequestUrl(id)).fetch<GetRiderResponse>();
  return { riderInfo: response.data };
};
