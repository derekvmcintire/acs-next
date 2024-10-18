import { Group } from '@mantine/core';
import { getRiderHistory } from '@/src/_api/get-history';
import { getSingleRider } from '@/src/_api/get-rider';
import { getCareerWins, getTopTenResults } from '@/src/_components/Results/utils';
import { IRaceYear, IRiderInfo } from '@/src/_types';
import { DEFAULT_RIDER_NOT_FOUND } from '@/src/global-constants';
import { ColorSchemeToggle } from '../../../_components/ColorSchemeToggle/ColorSchemeToggle';
import ResultsTableLayoutServer from '../../../_components/Results/server/ResultsTableLayoutServer';
import RiderInfoLayoutServer from '../../../_components/Rider/server/RiderInfoLayoutServer';
import TopNav from '../../../_components/TopNav/TopNav';
import classes from './riderpage.module.css';

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

  riderInfo.wins = getCareerWins(history);
  riderInfo.topResults = getTopTenResults(history);

  return (
    <>
      <div className={classes.infoWrap}>
        <TopNav />
        <RiderInfoLayoutServer riderInfo={riderInfo} />
      </div>
      <div className={classes.resultsWrap}>
        <Group pb="50px">
          <ResultsTableLayoutServer history={history} />
        </Group>
        <ColorSchemeToggle />
      </div>
    </>
  );
}

export const revalidate = 0;
