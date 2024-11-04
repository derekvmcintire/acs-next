import { API_BASE_URL, API_RACE_PATH } from '@/src/_api/constants';
import { IExistingRace } from '@/src/_types';
import { getResponse } from './helpers';
import { IGetRacesResponse } from './types';

export interface GetRacesFilters {
  name?: string;
  dateRange?: {
    from: string;
    to: string;
  };
  location?: string;
  id?: number;
}

export const getRacesRequestUrl = (filters: GetRacesFilters) => {
  const url = `${API_BASE_URL}${API_RACE_PATH}?`;

  const queryParams = [
    filters.name ? `name=${encodeURIComponent(filters.name)}` : '',
    filters.location ? `location=${encodeURIComponent(filters.location)}` : '',
    filters.id ? `id=${filters.id}` : '',
    filters.dateRange
      ? `from=${encodeURIComponent(filters.dateRange.from)}&to=${encodeURIComponent(filters.dateRange.to)}`
      : '',
  ]
    .filter(Boolean) // Remove empty strings
    .join('&');

  return `${url}${queryParams}`;
};

export const getRaces = async (filters: GetRacesFilters): Promise<IGetRacesResponse> => {
  const result = await getResponse(
    getRacesRequestUrl(filters),
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
