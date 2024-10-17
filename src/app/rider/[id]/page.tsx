import { Suspense } from 'react';
import { Group } from '@mantine/core';
import { getRiderHistory } from '@/src/_api/get-history';
import { getSingleRider } from '@/src/_api/get-rider';
import { getCareerWins, getTopTenResults } from '@/src/_components/Results/utils';
import { IRaceYear, IRiderInfo } from '@/src/_types';
import { DEFAULT_RIDER_NOT_FOUND } from '@/src/global-constants';
import { ColorSchemeToggle } from '../../../_components/ColorSchemeToggle/ColorSchemeToggle';
import ResultsTableServer from '../../../_components/Results/server/ResultsTableServer';
import RiderInfoServer from '../../../_components/Rider/server/RiderInfoServer';
import TopNav from '../../../_components/TopNav/TopNav';
import Loader from '../../loading';
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

  console.log('riderInfo is: ', riderInfo);

  return (
    <>
      <div className={classes.infoWrap}>
        <TopNav />
        <Suspense fallback={<Loader />}>
          <RiderInfoServer data-testid="rider-info-server" riderInfo={riderInfo} />
        </Suspense>
      </div>
      <div className={classes.resultsWrap}>
        <Group pb="50px">
          <ResultsTableServer data-testid="results-table-server" history={history} />
        </Group>
        <ColorSchemeToggle />
      </div>
    </>
  );
}

export const revalidate = 0;
