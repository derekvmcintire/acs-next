import { QueryParams, simple } from 'simple-fetch-ts';
import {
  API_BASE_URL,
  API_RACES_PATH,
  API_RECENT_PATH,
  API_RESULT_PATH,
} from '@/src/_api/constants';
import { IGetRecentRaceResultsResponse } from '../../types';
import { GetRecentRaceResultsResponse } from './fetch-races-response-type';

export interface GetRacesFilters {
  location?: string;
  limit?: number;
}

const url = `${API_BASE_URL}${API_RACES_PATH}${API_RESULT_PATH}${API_RECENT_PATH}`;

export const fetchRecentRaceResults = async (
  filters: GetRacesFilters
): Promise<IGetRecentRaceResultsResponse> => {
  const params = filters as QueryParams;
  const response = await simple(url).params(params).fetch<GetRecentRaceResultsResponse[]>();
  return { results: response.data };
};
