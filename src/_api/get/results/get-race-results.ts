import { API_BASE_URL, API_RACES_PATH, API_RESULT_PATH } from '@/src/_api/constants';
import { getResponse } from '../../helpers';
import { IGetRaceResultsResponse } from '../../types';
import { GetRaceResultsResponse } from './get-race-results-response-type';

export const getRaceResultsRequestUrl = (id: number) =>
  `${API_BASE_URL}${API_RACES_PATH}/${id}${API_RESULT_PATH}`;

export const getRaceResults = async (id: number): Promise<IGetRaceResultsResponse> => {
  const result = await getResponse(
    getRaceResultsRequestUrl(id),
    async (response: Response): Promise<IGetRaceResultsResponse> => {
      const parsedResponse: GetRaceResultsResponse[] = await response.json();
      return { results: parsedResponse };
    }
  );
  return result;
};

export const getRecentRaceResults = async (id: number): Promise<IGetRaceResultsResponse> => {
  try {
    const response = await fetch(getRaceResultsRequestUrl(id));

    if (!response.ok) {
      return { results: null, error: `Error ${response.status}: ${response.statusText}` };
    }

    const parsedResponse: GetRaceResultsResponse[] = await response.json();
    return { results: parsedResponse, error: null };
  } catch (error) {
    return { results: null, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};
