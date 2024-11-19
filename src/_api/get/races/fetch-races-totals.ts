import { API_BASE_URL, API_RACES_PATH, API_TOTALS_PATH } from '@/src/_api/constants';
import { simpleTypedFetch } from '../../helpers';
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
  return simpleTypedFetch<GetRacesTotalsResponse[]>(getRacesTotalsUrl(filters))
    .then((response: GetRacesTotalsResponse[]) => {
      return { totals: response };
    })
    .catch((error: string) => {
      return { error, totals: [] };
    });
};
