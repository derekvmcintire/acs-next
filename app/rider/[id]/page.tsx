import { Suspense } from 'react';
import { Group, Loader } from '@mantine/core';
import { ColorSchemeToggle } from '../../ui/ColorSchemeToggle/ColorSchemeToggle';
import RacerInfoContainer from '../../ui/RacerInfo/components/RacerInfoContainer';
import TableContainer from '../../ui/Results/components/TableContainer';
import TopNav from '../../ui/TopNav/TopNav';
import classes from '../styles/riderpage.module.css';

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
        <RacerInfoContainer id={id} />
      </Suspense>
      <Group pb="50px">
        <TableContainer />
      </Group>
      <ColorSchemeToggle />
    </div>
  );
}
