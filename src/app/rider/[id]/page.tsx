import { getRiderHistory } from '@/src/_api/get-history';
import { getRidersByTeam, getSingleRider } from '@/src/_api/get-rider';
import ResultsTableTabs from '@/src/_components/Results/client/ResultsTabs';
import {
  getCareerWins,
  getTopTenResults,
  sortRacingDataByYear,
} from '@/src/_components/Results/utils';
import { getCurrentTeam } from '@/src/_components/Rider/utils';
import { IRaceYear, IRiderInfo } from '@/src/_types';
import { DEFAULT_RIDER_NOT_FOUND } from '@/src/global-constants';
import { ColorSchemeToggle } from '../../../_components/ColorSchemeToggle/ColorSchemeToggle';
import RiderInfoLayout from '../../../_components/Rider/client/RiderInfoLayout';
import TopNav from '../../../_components/TopNav/TopNav';

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

  return (
    <>
      <TopNav />
      <RiderInfoLayout riderInfo={riderInfo} riderTeamMembers={riderTeamMembers} />
      <ResultsTableTabs history={sortRacingDataByYear(history)} />
      <ColorSchemeToggle />
    </>
  );
}

export const revalidate = 0;
