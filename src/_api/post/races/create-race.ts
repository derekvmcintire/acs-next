import { simple } from 'simple-fetch-ts';
import { API_BASE_URL, API_RACES_PATH } from '@/src/_api/constants';
import { GetRacesResponse } from '../../get/races/fetch-races-response-type';
import { CreateRaceRequest } from './create-race-request-type';

export const url = `${API_BASE_URL}${API_RACES_PATH}`;

export const createRace = async (raceData: CreateRaceRequest) => {
  const response = await simple(url).body(raceData).post<GetRacesResponse>();
  return response.data;
};
