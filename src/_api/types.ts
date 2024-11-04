import { ICategory, INetworkResponse, IRaceYear, IRiderInfo } from '../_types';

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

export interface IGetRacesByNameResonse extends INetworkResponse {
  races?: any; // TODO update any
}

export interface IGetCategoriesResponse extends INetworkResponse {
  categories?: ICategory[] | null;
}
