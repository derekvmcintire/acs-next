import {
  API_BASE_URL,
  API_RACES_PATH,
  API_RECENT_PATH,
  API_RESULT_PATH,
} from '@/src/_api/constants';
import { getResponse } from '../../helpers';
import { IGetRecentRaceResultsResponse } from '../../types';
import { GetRecentRaceResultsResponse } from './fetch-races-response-type';

export interface GetRacesFilters {
  location?: string;
  limit?: number;
}

export const getRacesRequestUrl = (filters: GetRacesFilters) => {
  const url = `${API_BASE_URL}${API_RACES_PATH}${API_RESULT_PATH}${API_RECENT_PATH}?`;

  const queryParams = [
    filters.location ? `location=${encodeURIComponent(filters.location)}` : '',
    filters.limit ? `limit=${filters.limit}` : '',
  ]
    .filter(Boolean) // Remove empty strings
    .join('&');

  return `${url}${queryParams}`;
};

export const fetchRecentRaceResults = async (
  filters: GetRacesFilters
): Promise<IGetRecentRaceResultsResponse> => {
  const result = await getResponse(
    getRacesRequestUrl(filters),
    async (response: Response): Promise<IGetRecentRaceResultsResponse> => {
      const parsedResponse: GetRecentRaceResultsResponse[] = await response.json();
      return { results: parsedResponse };
    }
  );

  if ('error' in result) {
    return { ...result, results: [] };
  }

  return result;
};
