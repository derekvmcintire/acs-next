import {
  ICategory,
  IExistingRace,
  INetworkResponse,
  IRaceYear,
  IResult,
  IRiderInfo,
} from '../_types';

export interface IGetSingleRiderResponse extends INetworkResponse {
  riderInfo?: IRiderInfo | null;
}

export interface IGetRidersResponse extends INetworkResponse {
  riders?: IRiderInfo | null;
}

export interface IGetHistoryResponse extends INetworkResponse {
  history?: IRaceYear[] | null;
}

export interface IGetRidersByTeamResponse extends INetworkResponse {
  riders?: IRiderInfo[] | null;
}

export interface IGetRacesResponse extends INetworkResponse {
  races?: IExistingRace[];
}

export interface IGetCategoriesResponse extends INetworkResponse {
  categories?: ICategory[] | null;
}

export interface IGetRaceResultsResponse extends INetworkResponse {
  results?: IResult[] | null;
}
