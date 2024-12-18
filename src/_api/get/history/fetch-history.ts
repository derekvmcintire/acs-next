import { simple } from 'simple-fetch-ts';
import { API_BASE_URL, API_RESULT_PATH, API_RIDER_PATH } from '@/src/_api/constants';
import { IGetHistoryResponse } from '../../types';
import { GetHistoryResponse } from './fetch-history-response-type';

export const getRiderHistoryRequestUrl = (id: number) =>
  `${API_BASE_URL}${API_RIDER_PATH}/${id}/${API_RESULT_PATH}`;

export const fetchRiderHistory = async (id: number): Promise<IGetHistoryResponse> => {
  const response = await simple(getRiderHistoryRequestUrl(id)).fetch<GetHistoryResponse>();
  return { history: response.data };
};
