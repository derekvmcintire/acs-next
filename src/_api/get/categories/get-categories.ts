import { API_BASE_URL, API_CATEGORIES_PATH, API_RACES_PATH } from '@/src/_api/constants';
import { getResponse } from '../../helpers';
import { IGetCategoriesResponse } from '../../types';
import { GetCategoriesResponse } from './get-categories-response-type';

export const getCategoriesUrl = () => `${API_BASE_URL}${API_RACES_PATH}${API_CATEGORIES_PATH}`;

export const getCategories = async (): Promise<IGetCategoriesResponse> => {
  const result = await getResponse(
    getCategoriesUrl(),
    async (response: Response): Promise<IGetCategoriesResponse> => {
      const parsedResponse: GetCategoriesResponse[] = await response.json();
      return { categories: parsedResponse };
    }
  );
  return result;
};
