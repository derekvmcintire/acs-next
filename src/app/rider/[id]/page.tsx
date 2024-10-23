import { getRiderHistory } from '@/src/_api/get-history';
import {
  getRidersByTeam,
  getSingleRider,
  IGetRidersByTeamResponse,
  IGetSingleRiderResponse,
} from '@/src/_api/get-rider';
import { getCareerWins, getCurrentTeam, getTopTenResults } from '@/src/_components/Rider/utils';
import NetworkError from '@/src/_components/ui/NetworkError/NetworkError';
import { IRaceYear } from '@/src/_types';
import { DEFAULT_RIDER_NOT_FOUND } from '@/src/global-constants';
import Rider from '../../../_components/Rider/Rider';

interface RiderPageParams {
  id: number;
}

interface RiderPageProps {
  params: RiderPageParams;
}

export default async function RiderPage({ params }: RiderPageProps) {
  const { id } = params;
  const errors = [];

  const history: IRaceYear[] = await getRiderHistory(id);

  const riderResponse: IGetSingleRiderResponse = await getSingleRider(id);
  riderResponse?.error && errors.push(riderResponse.error);
  const riderInfo = riderResponse?.riderInfo || DEFAULT_RIDER_NOT_FOUND;

  const riderTeamResponse: IGetRidersByTeamResponse = await getRidersByTeam(
    getCurrentTeam(riderInfo.teams)
  );
  riderTeamResponse?.error && errors.push(riderTeamResponse.error);
  const riderTeamMembers = riderTeamResponse?.riders || [];

  riderInfo.wins = getCareerWins(history);
  riderInfo.topResults = getTopTenResults(history);

  return (
    <div>
      <NetworkError errors={errors} />
      <Rider riderInfo={riderInfo} riderTeamMembers={riderTeamMembers} history={history} />
    </div>
  );
}

export const revalidate = 0;
