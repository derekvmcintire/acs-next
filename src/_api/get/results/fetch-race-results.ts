import { simple } from 'simple-fetch-ts';
import { API_BASE_URL, API_RACES_PATH, API_RESULT_PATH } from '@/src/_api/constants';
import { IGetRaceResultsResponse } from '../../types';
import { GetRaceResultsResponse } from './fetch-race-results-response-type';

export const getRaceResultsRequestUrl = (id: number) =>
  `${API_BASE_URL}${API_RACES_PATH}/${id}${API_RESULT_PATH}`;

export const fetchRaceResults = async (id: number): Promise<IGetRaceResultsResponse> => {
  const response = await simple(getRaceResultsRequestUrl(id)).fetch<GetRaceResultsResponse[]>();
  return { results: response.data };
};
