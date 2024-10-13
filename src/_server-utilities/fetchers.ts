import { BASE_URL, HISTORY_PATH, RACERS_PATH } from '../_db/mock-api/constants';
import { IRacerHistory, IRacerInfo } from '../_types';

export const fetchRacerHistory = async (id: number) => {
  try {
    const response = await fetch(`${BASE_URL}${HISTORY_PATH}?racerId=${id}`);
    const parsedResponse: IRacerHistory[] = await response.json();
    const history = parsedResponse[0].results;
    console.log('history be: ', history);
    return history;
  } catch {
    return [];
  }
};

export const fetchRacer = async (id: number): Promise<IRacerInfo | null> => {
  try {
    const response = await fetch(`${BASE_URL}${RACERS_PATH}?id=${id}`);
    const parsedResponse: IRacerInfo[] = await response.json();
    return parsedResponse[0];
  } catch (error) {
    console.log('type of error is: ', typeof error);
    return null;
  }
};
