import { QueryParams, simple } from 'simple-fetch-ts';
import { API_BASE_URL, API_RACES_PATH } from '@/src/_api/constants';
import { IGetRacesResponse } from '../../types';
import { GetRacesResponse } from './fetch-races-response-type';

export interface GetRacesFilters {
  name?: string;
  location?: string;
  direction?: 'asc' | 'desc';
  id?: number;
  limit?: number;
  dateRange?: {
    from: string;
    to: string;
  };
  eventId?: number;
  orderBy?: 'id' | 'startDate' | 'eventId';
}

const _buildParams = (filters: GetRacesFilters): QueryParams => {
  const { name, dateRange, location, id, eventId, limit, orderBy, direction } = filters;
  // params need to be all lower case
  return {
    name: name || '',
    from: dateRange?.from || '',
    to: dateRange?.to || '',
    location: location || '',
    id: id || '',
    eventid: eventId || '',
    limit: limit || '',
    orderby: orderBy || '',
    direction: direction || '',
  };
};

export const fetchRaces = async (filters: GetRacesFilters): Promise<IGetRacesResponse> => {
  const url = `${API_BASE_URL}${API_RACES_PATH}`;
  const params = _buildParams(filters);
  const response = await simple(url).params(params).fetch<GetRacesResponse[]>();
  return { races: response.data };
};
