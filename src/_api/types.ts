import { INetworkResponse, IRaceYear, IRiderInfo } from '../_types';

export interface IGetSingleRiderResponse extends INetworkResponse {
  riderInfo?: IRiderInfo | null;
}

export interface IGetHistoryResponse extends INetworkResponse {
  history?: IRaceYear[] | null;
}

export interface IGetRidersByTeamResponse extends INetworkResponse {
  riders?: IRiderInfo[] | null;
}
