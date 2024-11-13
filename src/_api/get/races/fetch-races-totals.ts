import { API_BASE_URL, API_RACES_PATH, API_TOTALS_PATH } from '@/src/_api/constants';
import { getResponse } from '../../helpers';
import { IGetRacesTotalsResponse } from '../../types';
import { GetRacesTotalsResponse, GetTotalsFilters } from './fetch-races-response-type';

export const getRacesTotalsUrl = (filters: GetTotalsFilters) => {
  const url = `${API_BASE_URL}${API_RACES_PATH}${API_TOTALS_PATH}?`;

  const queryParams = [
    filters.groupBy ? `groupby=${encodeURIComponent(filters.groupBy)}` : '',
    filters.startDateRange
      ? `from=${encodeURIComponent(filters.startDateRange.from)}&to=${encodeURIComponent(filters.startDateRange.to)}`
      : '',
  ]
    .filter(Boolean) // Remove empty strings
    .join('&');

  return `${url}${queryParams}`;
};

export const fetchRacesTotals = async (
  filters: GetTotalsFilters
): Promise<IGetRacesTotalsResponse> => {
  const result = await getResponse(
    getRacesTotalsUrl(filters),
    async (response: Response): Promise<IGetRacesTotalsResponse> => {
      const parsedResponse: GetRacesTotalsResponse[] = await response.json();
      return { totals: parsedResponse };
    }
  );

  if ('error' in result) {
    return { ...result, totals: [] };
  }

  return result;
};
