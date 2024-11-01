import { API_BASE_URL, API_RESULT_PATH } from '@/src/_api/constants';
import { postResponse } from './helpers';

export const createResultRequestUrl = () => `${API_BASE_URL}${API_RESULT_PATH}`;

export interface CreateResultData {
  eventId: number;
  riderId: number;
  resultTypeId: number;
  noPlaceCodeTypeId: number;
  lap: number;
  place: number;
  time: string;
  points: number;
}

export interface CreateResultReturnData {
  id: number;
  eventId: number;
  riderId: number;
  resultTypeId: number;
  noPlaceCodeTypeId: number;
  lap: number;
  place: number;
  time: string | null;
  points: number;
}

export const createResult = async (resultData: CreateResultData) => {
  const createdResult = await postResponse(
    createResultRequestUrl(),
    async (response: Response): Promise<CreateResultReturnData> => {
      const parsedResponse: CreateResultReturnData = await response.json();
      return parsedResponse;
    },
    JSON.stringify(resultData)
  );
  return createdResult;
};
