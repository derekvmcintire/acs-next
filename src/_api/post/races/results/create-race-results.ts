import { simple } from 'simple-fetch-ts';
import { API_BASE_URL, API_RACES_PATH, API_RESULT_PATH } from '@/src/_api/constants';
import { CreateRaceResultsRequest } from './create-race-results-request-type';
import { CreateRaceResultsReturn } from './create-race-results-return-type';

export const url = `${API_BASE_URL}${API_RACES_PATH}${API_RESULT_PATH}`;

export const createRaceResults = async (requestData: CreateRaceResultsRequest) => {
  const response = await simple(url)
    .body<CreateRaceResultsRequest>(requestData)
    .post<CreateRaceResultsReturn>();
  return response.data;
};
