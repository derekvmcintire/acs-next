import { API_BASE_URL, API_RIDER_PATH } from '../../constants';
import { getResponse } from '../../helpers';
import { IGetRidersByTeamResponse } from '../../types';
import { GetRiderResponse } from './get-riders-response-type';

export const getRidersByTeamRequestUrl = (team: string) =>
  `${API_BASE_URL}${API_RIDER_PATH}?team=${encodeURIComponent(team)}`;

export const getRidersByTeam = async (team: string): Promise<IGetRidersByTeamResponse> => {
  const result = await getResponse(
    getRidersByTeamRequestUrl(team),
    async (response: Response): Promise<IGetRidersByTeamResponse> => {
      const riders: GetRiderResponse[] = await response.json();
      return { riders };
    }
  );
  return result;
};
