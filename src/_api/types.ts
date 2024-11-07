import { GetCategoriesResponse } from './get/categories/get-categories-response-type';
import { GetHistoryResponse } from './get/history/get-history-response-type';
import { GetRacesResponse } from './get/races/get-races-response-type';
import { GetRankingsResponse } from './get/rankings/get-rankings-response-type';
import { GetRaceResultsResponse } from './get/results/get-race-results-response-type';
import { GetRiderResponse } from './get/riders/get-riders-response-type';

export interface INetworkResponse {
  error?: string | null;
}

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

export interface IGetRankingsResponse extends INetworkResponse {
  rankings?: GetRankingsResponse[] | null;
}
