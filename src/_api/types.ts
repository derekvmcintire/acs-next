import { GetCategoriesResponse } from './get/categories/fetch-categories-response-type';
import { GetHistoryResponse } from './get/history/fetch-history-response-type';
import { GetRacesResponse } from './get/races/fetch-races-response-type';
import { GetRankingsResponse } from './get/rankings/fetch-rankings-response-type';
import { GetRaceResultsResponse } from './get/results/fetch-race-results-response-type';
import { GetRiderResponse } from './get/riders/fetch-riders-response-type';

export interface INetworkResponse {
  error?: string | null;
}

export interface IGetSingleRiderResponse extends INetworkResponse {
  riderInfo: GetRiderResponse | null;
}

export interface IGetRidersResponse extends INetworkResponse {
  riders?: GetRiderResponse[] | null;
}

export interface IGetHistoryResponse extends INetworkResponse {
  history?: GetHistoryResponse | null;
}

export interface IGetRacesResponse extends INetworkResponse {
  races?: GetRacesResponse[] | null;
}

export interface IGetCategoriesResponse extends INetworkResponse {
  categories?: GetCategoriesResponse[] | null;
}

export interface IGetRaceResultsResponse extends INetworkResponse {
  results?: GetRaceResultsResponse[] | null;
}

export interface IGetRankingsResponse extends INetworkResponse {
  rankings?: GetRankingsResponse[] | null;
}
