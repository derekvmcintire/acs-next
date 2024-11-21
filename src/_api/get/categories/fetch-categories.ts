import { simple } from 'simple-fetch-ts';
import { API_BASE_URL, API_CATEGORIES_PATH, API_RACES_PATH } from '@/src/_api/constants';
import { IGetCategoriesResponse } from '../../types';
import { GetCategoriesResponse } from './fetch-categories-response-type';

export const url = `${API_BASE_URL}${API_RACES_PATH}${API_CATEGORIES_PATH}`;

export const fetchCategories = async (): Promise<IGetCategoriesResponse> => {
  const response = await simple(url).fetch<GetCategoriesResponse[]>();
  return { categories: response.data };
};
