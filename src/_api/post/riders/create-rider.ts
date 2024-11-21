import { simple } from 'simple-fetch-ts';
import { API_BASE_URL, API_RIDER_PATH } from '@/src/_api/constants';
import { CreateRiderRequest } from './create-rider-request-type';
import { CreateRiderReturn } from './create-rider-return-type';

export const createRider = async (riderData: CreateRiderRequest) => {
  const url = `${API_BASE_URL}${API_RIDER_PATH}`;
  const result = await simple(url).body(riderData).post<CreateRiderReturn>();
  return result.data;
};
