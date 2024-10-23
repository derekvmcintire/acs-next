import { BASE_URL, RACERS_PATH } from '@/src/_api/constants';
import { INetworkResponse, IRiderInfo } from '@/src/_types';

export const getSingleRiderRequestUrl = (id: number) => `${BASE_URL}${RACERS_PATH}?id=${id}`;

export interface IGetSingleRiderResponse extends INetworkResponse {
  riderInfo?: IRiderInfo | null;
}

export const getSingleRider = async (id: number): Promise<IGetSingleRiderResponse> => {
  try {
    const response = await fetch(getSingleRiderRequestUrl(id));

    if (!response.ok) {
      throw new Error(
        `Network response status ${response.status} while getting single rider with id ${id}`
      );
    }

    const parsedResponse: IRiderInfo[] = await response.json();
    return { riderInfo: parsedResponse[0] };
  } catch (error: any) {
    return { error: `${error}` };
  }
};

export const getRidersByTeamRequestUrl = (team: string) =>
  `${BASE_URL}${RACERS_PATH}?currentTeam=${encodeURIComponent(team)}`;

export interface IGetRidersByTeamResponse extends INetworkResponse {
  riders?: IRiderInfo[] | null;
}

export const getRidersByTeam = async (team: string): Promise<IGetRidersByTeamResponse> => {
  try {
    const response = await fetch(getRidersByTeamRequestUrl(team));

    if (!response.ok) {
      throw new Error(
        `Network response status ${response.status} while getting riders by team name ${team}`
      );
    }

    const riders = await response.json();
    return { riders };
  } catch (error) {
    return { error: `${error}` };
  }
};
