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

export const createRider = async (riderData: CreateRiderData) => {
  const result = await postResponse(
    createRiderRequestUrl(),
    async (response: Response): Promise<any> => {
      const parsedResponse: any = await response.json();
      return { riderInfo: parsedResponse };
    },
    JSON.stringify(riderData)
  );
  return result;
};
