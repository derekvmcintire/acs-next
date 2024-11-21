import dayjs from 'dayjs';
import { QueryParams, simple } from 'simple-fetch-ts';
import { API_BASE_URL, API_RANKINGS_PATH, API_RIDER_PATH } from '@/src/_api/constants';
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

const url = `${API_BASE_URL}/${API_RIDER_PATH}/${API_RANKINGS_PATH}`;

export const fetchRankings = async ({
  year,
  limit,
}: GetRankingsParams): Promise<IGetRankingsResponse> => {
  const params: QueryParams = { year: year || dayjs().year(), limit: limit || '' };
  const response = await simple(url).params(params).fetch<GetRankingsResponse[]>();
  return { rankings: response.data };
};
