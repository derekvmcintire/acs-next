import { API_BASE_URL, API_RIDER_PATH } from '@/src/_api/constants';
import { getResponse } from '../../helpers';
import { IGetRidersResponse, IGetSingleRiderResponse } from '../../types';
import { GetRiderResponse } from './fetch-riders-response-type';

export const getSingleRiderRequestUrl = (id: number) => `${API_BASE_URL}${API_RIDER_PATH}/${id}`;

export const fetchSingleRider = async (id: number): Promise<IGetSingleRiderResponse> => {
  const result = await getResponse(
    getSingleRiderRequestUrl(id),
    async (response: Response): Promise<IGetSingleRiderResponse> => {
      const parsedResponse: GetRiderResponse = await response.json();
      return { riderInfo: parsedResponse };
    }
  );

  if ('error' in result) {
    return { ...result, riderInfo: null };
  }

  return result;
};

export interface GetRidersFilters {
  name?: string;
  team?: string;
  country?: string;
}

export const getRiderRequestUrl = ({ name, team, country }: GetRidersFilters) => {
  const url = `${API_BASE_URL}${API_RIDER_PATH}?`;

  const queryParams = [
    name ? `name=${encodeURIComponent(name)}` : '',
    team ? `team=${encodeURIComponent(team)}` : '',
    country ? `country=${encodeURIComponent(country)}` : '',
  ]
    .filter(Boolean) // Remove empty strings
    .join('&');

  const requestURL = `${url}${queryParams}`;
  console.log('requesting with URL: ', requestURL);
  return requestURL;
};

export const fetchListOfRiders = async (filters: GetRidersFilters) => {
  const result = await getResponse(
    getRiderRequestUrl(filters),
    async (response: Response): Promise<IGetRidersResponse> => {
      const parsedResponse: GetRiderResponse[] = await response.json();
      return { riders: parsedResponse };
    }
  );
  return result;
};
