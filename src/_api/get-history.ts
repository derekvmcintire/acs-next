import { BASE_URL, HISTORY_PATH } from '@/src/_api/constants';
import { IRacerHistory } from '@/src/_types';
import { getResponse } from './helpers';
import { IGetHistoryResponse } from './types';

export const getRiderHistoryRequestUrl = (id: number) => `${BASE_URL}${HISTORY_PATH}?racerId=${id}`;

export const getRiderHistory = async (id: number) => {
  const result = await getResponse(
    getRiderHistoryRequestUrl(id),
    async (response: Response): Promise<IGetHistoryResponse> => {
      const parsedResponse: IRacerHistory[] = await response.json();
      return { history: parsedResponse[0].results };
    }
  );
  return result;
};
