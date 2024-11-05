import { INetworkResponse } from '../_types';
import { GetCategoriesResponse } from './get/categories/get-categories-response-type';
import { GetHistoryResponse } from './get/history/get-history-response-type';
import { GetRaceResultsResponse } from './get/race/get-race-results-response-type';
import { GetRacesResponse } from './get/races/get-races-response-type';
import { GetRiderResponse } from './get/riders/get-riders-response-type';

export interface IGetSingleRiderResponse extends INetworkResponse {
  riderInfo?: GetRiderResponse | null;
}

export interface IGetRidersResponse extends INetworkResponse {
  riders?: GetRiderResponse[] | null;
}

export interface IGetHistoryResponse extends INetworkResponse {
  history?: GetHistoryResponse | null;
}

export interface IGetRidersByTeamResponse extends INetworkResponse {
  riders?: GetRiderResponse[] | null;
}

export interface IGetRacesResponse extends INetworkResponse {
  races?: GetRacesResponse[];
}

export interface IGetCategoriesResponse extends INetworkResponse {
  categories?: GetCategoriesResponse[] | null;
}

export interface IGetRaceResultsResponse extends INetworkResponse {
  results?: GetRaceResultsResponse[] | null;
}
