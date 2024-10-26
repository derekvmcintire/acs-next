import { API_BASE_URL, API_RESULT_PATH } from '@/src/_api/constants';
import { IRacerHistory } from '@/src/_types';
import { getResponse } from './helpers';
import { IGetHistoryResponse } from './types';

export const getRiderHistoryRequestUrl = (id: number) => `${API_BASE_URL}${API_RESULT_PATH}/${id}`;

export const getRiderHistory = async (id: number) => {
  const result = await getResponse(
    getRiderHistoryRequestUrl(id),
    async (response: Response): Promise<IGetHistoryResponse> => {
      const parsedResponse: IRacerHistory = await response.json();
      return { history: parsedResponse.results };
    }
  );
  return result;
};
