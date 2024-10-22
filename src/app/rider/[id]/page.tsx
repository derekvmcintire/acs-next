import { getRiderHistory } from '@/src/_api/get-history';
import { getRidersByTeam, getSingleRider } from '@/src/_api/get-rider';
import { getCareerWins, getCurrentTeam, getTopTenResults } from '@/src/_components/Rider/utils';
import { IRaceYear, IRiderInfo } from '@/src/_types';
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
  const history: IRaceYear[] = await getRiderHistory(id);
  const riderInfo: IRiderInfo = (await getSingleRider(id)) || DEFAULT_RIDER_NOT_FOUND;
  const riderTeamMembers: IRiderInfo[] =
    (await getRidersByTeam(getCurrentTeam(riderInfo.teams))) || [];

  riderInfo.wins = getCareerWins(history);
  riderInfo.topResults = getTopTenResults(history);

  // const teamWins = // write helper function
  // const teamRaces = // write helper function
  // // add team wins and races to context to use in Team Quick Stats component

  return (
    <main>
      <Rider riderInfo={riderInfo} riderTeamMembers={riderTeamMembers} history={history} />
    </main>
  );
}

export const revalidate = 0;
