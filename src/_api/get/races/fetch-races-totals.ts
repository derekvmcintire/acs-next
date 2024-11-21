import { simple } from 'simple-fetch-ts';
import { API_BASE_URL, API_RACES_PATH, API_TOTALS_PATH } from '@/src/_api/constants';
import { IGetRacesTotalsResponse } from '../../types';
import { GetRacesTotalsResponse, GetTotalsFilters } from './fetch-races-response-type';

export const url = `${API_BASE_URL}${API_RACES_PATH}${API_TOTALS_PATH}`;

export const fetchRacesTotals = async (
  filters: GetTotalsFilters
): Promise<IGetRacesTotalsResponse> => {
  const params = {
    groupby: filters?.groupBy || '',
    from: filters.startDateRange?.from || '',
    to: filters.startDateRange?.to || '',
  };
  const response = await simple(url).params(params).fetch<GetRacesTotalsResponse[]>();
  return { totals: response.data };
};
