import { BASE_URL, HISTORY_PATH } from '@/src/_api/constants';
import { IRacerHistory } from '@/src/_types';

export const getRiderHistoryRequestUrl = (id: number) => `${BASE_URL}${HISTORY_PATH}?racerId=${id}`;

export const getRiderHistory = async (id: number) => {
  try {
    const response = await fetch(getRiderHistoryRequestUrl(id));
    const parsedResponse: IRacerHistory[] = await response.json();
    return parsedResponse[0].results;
  } catch {
    return [];
  }
};
