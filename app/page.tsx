import { Suspense } from 'react';
import { Group } from '@mantine/core';
import RacerInfoContainer from './rider/ui/RacerInfo/components/RacerInfoContainer';
import Loader from './rider/ui/Results/components/loading';
import RaceTableContainer from './rider/ui/Results/components/TableContainer';
import { ColorSchemeToggle } from './ui/ColorSchemeToggle/ColorSchemeToggle';
import TopNav from './ui/TopNav/TopNav';
import classes from './page.module.css';

export default function HomePage() {
  const racerIds = [1, 2, 3];
  const randomRacerId = racerIds[Math.floor(Math.random() * racerIds.length)];

  return (
    <div className={classes.page}>
      <TopNav />
      <Suspense fallback={<Loader />}>
        <RacerInfoContainer id={randomRacerId} />
      </Suspense>
      <Group pb="50px">
        <RaceTableContainer />
      </Group>
      <ColorSchemeToggle />
    </div>
  );
}
