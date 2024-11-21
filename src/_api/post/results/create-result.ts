import { simple } from 'simple-fetch-ts';
import { API_BASE_URL, API_RESULT_PATH } from '@/src/_api/constants';
import { CreateResultRequest } from './create-result-request-type';
import { CreateResultReturn } from './create-result-return-type';

export const createResult = async (resultData: CreateResultRequest) => {
  const url = `${API_BASE_URL}${API_RESULT_PATH}`;
  const response = await simple(url).body(resultData).post<CreateResultReturn>();
  return response.data;
};
