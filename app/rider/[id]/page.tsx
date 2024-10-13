import { Suspense } from 'react';
import { Group, Loader } from '@mantine/core';
import { ColorSchemeToggle } from '../../_src/_components/ColorSchemeToggle/ColorSchemeToggle';
import ResultsTableServer from '../../_src/_components/Results/ResultsTableServer';
import RiderInfo from '../../_src/_components/Rider/RiderInfo';
import TopNav from '../../_src/_components/TopNav/TopNav';
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
        <RiderInfo id={id} />
      </Suspense>
      <Group pb="50px">
        <ResultsTableServer />
      </Group>
      <ColorSchemeToggle />
    </div>
  );
}
