import { API_BASE_URL, API_RIDER_PATH } from '@/src/_api/constants';
import { postResponse } from '../../helpers';
import { CreateRiderRequest } from './create-rider-request-type';
import { CreateRiderReturn } from './create-rider-return-type';

export const createRiderRequestUrl = () => `${API_BASE_URL}${API_RIDER_PATH}`;

export const createRider = async (riderData: CreateRiderRequest) => {
  const result = await postResponse(
    createRiderRequestUrl(),
    async (response: Response): Promise<CreateRiderReturn> => {
      const parsedResponse: CreateRiderReturn = await response.json();
      return parsedResponse;
    },
    JSON.stringify(riderData)
  );
  return result;
};
