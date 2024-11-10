import { API_BASE_URL, API_RESULT_PATH } from '@/src/_api/constants';
import { getResponse } from '../../helpers';
import { IGetHistoryResponse } from '../../types';
import { GetHistoryResponse } from './fetch-history-response-type';

export const getRiderHistoryRequestUrl = (id: number) =>
  `${API_BASE_URL}${API_RESULT_PATH}?riderId=${id}`;

export const fetchRiderHistory = async (id: number) => {
  const result = await getResponse(
    getRiderHistoryRequestUrl(id),
    async (response: Response): Promise<IGetHistoryResponse> => {
      const parsedResponse: GetHistoryResponse = await response.json();
      return { history: parsedResponse };
    }
  );

  if ('error' in result) {
    return { ...result, history: null };
  }

  return result;
};
