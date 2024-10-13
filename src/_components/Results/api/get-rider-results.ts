import { BASE_URL, HISTORY_PATH } from '@/src/_db/mock-api/constants';
import { IRacerHistory } from '@/src/_types';

export const getRiderResults = async (id: number) => {
  try {
    const response = await fetch(`${BASE_URL}${HISTORY_PATH}?racerId=${id}`);
    const parsedResponse: IRacerHistory[] = await response.json();
    return parsedResponse[0].results;
  } catch {
    return [];
  }
};
