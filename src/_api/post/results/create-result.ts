import { API_BASE_URL, API_RESULT_PATH } from '@/src/_api/constants';
import { postResponse } from '../../helpers';
import { CreateResultRequest } from './create-result-request-type';
import { CreateResultReturn } from './create-result-return-type';

export const createResultRequestUrl = () => `${API_BASE_URL}${API_RESULT_PATH}`;

// @TODO - is this inconsistent with other return types?
export const createResult = async (resultData: CreateResultRequest) => {
  const createdResult = await postResponse(
    createResultRequestUrl(),
    async (response: Response): Promise<CreateResultReturn> => {
      const parsedResponse: CreateResultReturn = await response.json();
      return parsedResponse;
    },
    JSON.stringify(resultData)
  );
  return createdResult;
};
