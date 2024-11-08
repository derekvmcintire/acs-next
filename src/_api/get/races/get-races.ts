import { API_BASE_URL, API_RACES_PATH } from '@/src/_api/constants';
import { getResponse } from '../../helpers';
import { IGetRacesResponse } from '../../types';
import { GetRacesResponse } from './get-races-response-type';

export interface GetRacesFilters {
  name?: string;
  dateRange?: {
    from: string;
    to: string;
  };
  location?: string;
  id?: number;
  eventId?: number;
  limit?: number;
  orderBy?: 'id' | 'startDate' | 'eventId';
  direction?: 'asc' | 'desc';
}

export const getRacesRequestUrl = (filters: GetRacesFilters) => {
  const url = `${API_BASE_URL}${API_RACES_PATH}?`;

  const queryParams = [
    filters.name ? `name=${encodeURIComponent(filters.name)}` : '',
    filters.location ? `location=${encodeURIComponent(filters.location)}` : '',
    filters.id ? `id=${filters.id}` : '',
    filters.eventId ? `eventid=${filters.eventId}` : '',
    filters.dateRange
      ? `from=${encodeURIComponent(filters.dateRange.from)}&to=${encodeURIComponent(filters.dateRange.to)}`
      : '',
    filters.limit ? `limit=${filters.limit}` : '',
    filters.orderBy ? `orderby=${filters.orderBy}` : '',
    filters.direction ? `direction=${filters.direction}` : '',
  ]
    .filter(Boolean) // Remove empty strings
    .join('&');

  return `${url}${queryParams}`;
};

// @TODO replace with function below
export const getRaces = async (filters: GetRacesFilters): Promise<IGetRacesResponse> => {
  const result = await getResponse(
    getRacesRequestUrl(filters),
    async (response: Response): Promise<IGetRacesResponse> => {
      const parsedResponse: GetRacesResponse[] = await response.json();
      return { races: parsedResponse };
    }
  );

  if ('error' in result) {
    throw new Error(String(result.error));
  }

  return result;
};

export const getRecentRaces = async (filters: GetRacesFilters): Promise<IGetRacesResponse> => {
  try {
    const response = await fetch(getRacesRequestUrl(filters));

    if (!response.ok) {
      return { races: null, error: `Error ${response.status}: ${response.statusText}` };
    }

    const parsedResponse: GetRacesResponse[] = await response.json();
    return { races: parsedResponse, error: null };
  } catch (error) {
    return { races: null, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};
