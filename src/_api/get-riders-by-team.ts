import { IRiderInfo } from '../_types';
import { BASE_URL, RACERS_PATH } from './constants';
import { getResponse } from './helpers';
import { IGetRidersByTeamResponse } from './types';

export const getRidersByTeamRequestUrl = (team: string) =>
  `${BASE_URL}${RACERS_PATH}?currentTeam=${encodeURIComponent(team)}`;

export const getRidersByTeam = async (team: string): Promise<IGetRidersByTeamResponse> => {
  const result = await getResponse(
    getRidersByTeamRequestUrl(team),
    async (response: Response): Promise<IGetRidersByTeamResponse> => {
      const riders: IRiderInfo[] = await response.json();
      return { riders };
    }
  );
  return result;
};
