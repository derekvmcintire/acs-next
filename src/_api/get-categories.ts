import { API_BASE_URL, API_CATEGORIES_PATH } from '@/src/_api/constants';
import { getResponse } from './helpers';
import { IGetCategoriesResponse } from './types';

export interface ICategory {
  id: number;
  disicpline: string;
  name: string;
  description: string;
}

export const getCategoriesUrl = () => `${API_BASE_URL}${API_CATEGORIES_PATH}`;

export const getCategories = async (): Promise<IGetCategoriesResponse> => {
  const result = await getResponse(
    getCategoriesUrl(),
    async (response: Response): Promise<IGetCategoriesResponse> => {
      const parsedResponse = await response.json();
      return { categories: parsedResponse };
    }
  );
  return result;
};
