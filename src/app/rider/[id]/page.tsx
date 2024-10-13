import { Suspense } from 'react';
import { Group, Loader } from '@mantine/core';
import { ColorSchemeToggle } from '../../../_components/ColorSchemeToggle/ColorSchemeToggle';
import ResultsTableServer from '../../../_components/Results/server/ResultsTableServer';
import RiderInfoServer from '../../../_components/Rider/server/RiderInfoServer';
import TopNav from '../../../_components/TopNav/TopNav';
import classes from './riderpage.module.css';

interface RiderPageParams {
  id: number;
}

interface RiderPageProps {
  params: RiderPageParams;
}

export default function RiderPage({ params }: RiderPageProps) {
  const { id } = params;

  return (
    <div className={classes.riderPage}>
      <TopNav />
      <Suspense fallback={<Loader />}>
        <RiderInfoServer id={id} />
      </Suspense>
      <Group pb="50px">
        <ResultsTableServer id={id} />
      </Group>
      <ColorSchemeToggle />
    </div>
  );
}
