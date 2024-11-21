import { API_BASE_URL, API_RACES_PATH, API_RESULT_PATH } from '@/src/_api/constants';
import { getResponse } from '../../helpers';
import { IGetRaceResultsResponse } from '../../types';
import { GetRaceResultsResponse } from './fetch-race-results-response-type';

export const getRaceResultsRequestUrl = (id: number) =>
  `${API_BASE_URL}${API_RACES_PATH}/${id}${API_RESULT_PATH}`;

export const fetchRaceResults = async (id: number): Promise<IGetRaceResultsResponse> => {
  const result = await getResponse(
    getRaceResultsRequestUrl(id),
    async (response: Response): Promise<IGetRaceResultsResponse> => {
      const parsedResponse: GetRaceResultsResponse[] = await response.json();
      return { results: parsedResponse };
    }
  );

  if ('error' in result) {
    return { ...result, results: null };
  }

  return result;
};
