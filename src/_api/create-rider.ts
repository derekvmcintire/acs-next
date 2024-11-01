import { API_BASE_URL, API_RIDER_PATH } from '@/src/_api/constants';
import { postResponse } from './helpers';

export const createRiderRequestUrl = () => `${API_BASE_URL}${API_RIDER_PATH}`;

export interface CreateRiderData {
  firstName: string;
  lastName: string;
  dob: string;
  country: string;
  hometown: string;
  photo: string;
  strava: string;
  insta: string;
  about: string;
}

export interface CreateRiderReturnData {
  id: number;
  firstName: string;
  lastName: string;
  dob: string;
  country: string;
  hometown: string;
  photo: string;
  strava: string;
  insta: string;
  about: string;
}

export const createRider = async (riderData: CreateRiderData) => {
  const result = await postResponse(
    createRiderRequestUrl(),
    async (response: Response): Promise<CreateRiderReturnData> => {
      const parsedResponse: CreateRiderReturnData = await response.json();
      return parsedResponse;
    },
    JSON.stringify(riderData)
  );
  return result;
};
