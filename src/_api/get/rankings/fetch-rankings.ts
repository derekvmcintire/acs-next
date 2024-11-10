import dayjs from 'dayjs';
import { API_BASE_URL, API_RANKINGS_PATH, API_RIDER_PATH } from '@/src/_api/constants';
import { getResponse } from '../../helpers';
import { IGetRankingsResponse } from '../../types';
import { GetRankingsResponse } from './fetch-rankings-response-type';

export const getRankingsResultsRequestUrl = (year: number, limit?: number) => {
  const baseUrl = `${API_BASE_URL}/${API_RIDER_PATH}/${API_RANKINGS_PATH}?year=${year}`;

  return limit ? `${baseUrl}&limit=${limit}` : baseUrl;
};

type GetRankingsParams = {
  year?: number;
  limit?: number;
};

export const fetchRankings = async ({
  year,
  limit,
}: GetRankingsParams): Promise<IGetRankingsResponse> => {
  const result = await getResponse(
    getRankingsResultsRequestUrl(year || dayjs().year(), limit),
    async (response: Response): Promise<IGetRankingsResponse> => {
      const parsedResponse: GetRankingsResponse[] = await response.json();
      return { rankings: parsedResponse };
    }
  );

  if ('error' in result) {
    return { ...result, rankings: null };
  }

  return result;
};
